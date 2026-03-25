import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of, tap } from 'rxjs';
import { Book, SearchResult } from '../models/book.model';

const API = '/api/graphql';

const BOOK_FRAGMENT = `
  id
  title
  slug
  description
  rating
  ratings_count
  users_read_count
  pages
  release_year
  image { url color }
  cached_contributors
`;

@Injectable({ providedIn: 'root' })
export class HardcoverService {
  private http = inject(HttpClient);

  private query<T>(q: string, variables?: object): Observable<T> {
    return this.http
      .post<{ data: T; errors?: any[] }>(API, { query: q, variables })
      .pipe(
        tap((res) => {
          if (res.errors?.length) console.error('[Hardcover]', res.errors);
        }),
        map((res) => {
          if (!res.data) throw new Error('No data — check backend logs');
          return res.data;
        })
      );
  }

  /** Normalize an absolute CDN URL — handles relative paths and known CDN patterns */
  static normalizeImageUrl(raw: any): string {
    if (!raw) return '';
    const url = typeof raw === 'string' ? raw : (raw?.url ?? '');
    if (!url) return '';
    if (url.startsWith('http')) return url;
    // Relative path → prepend Hardcover CDN
    return `https://hardcover.app${url.startsWith('/') ? '' : '/'}${url}`;
  }

  private parseContributors(raw: any): { author: { name: string } }[] {
    if (!raw) return [];
    try {
      const arr = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (!Array.isArray(arr)) return [];
      return arr.map((c: any) => ({
        author: { name: c?.author?.name ?? c?.name ?? 'Unknown' }
      }));
    } catch { return []; }
  }

  private normalizeBook(b: any): Book {
    const imgUrl = HardcoverService.normalizeImageUrl(b.image?.url ?? b.image);
    return {
      ...b,
      image: imgUrl ? { url: imgUrl, color: b.image?.color } : undefined,
      cached_contributors: this.parseContributors(b.cached_contributors),
    };
  }

  getTrendingNonfiction(limit = 20): Observable<Book[]> {
    const q = `
      query TrendingBooks {
        books(
          order_by: { users_read_count: desc }
          limit: ${limit}
          where: { users_read_count: { _gt: 1000 } }
        ) { ${BOOK_FRAGMENT} }
      }
    `;
    return this.query<{ books: any[] }>(q).pipe(
      map((d) => (d.books ?? []).map((b) => this.normalizeBook(b))),
      catchError((e) => { console.error(e); return of([]); })
    );
  }

  getBook(slug: string): Observable<Book | null> {
    const q = `
      query GetBook($slug: String!) {
        books(where: { slug: { _eq: $slug } }, limit: 1) {
          ${BOOK_FRAGMENT}
          release_date
        }
      }
    `;
    return this.query<{ books: any[] }>(q, { slug }).pipe(
      map((d) => d.books?.[0] ? this.normalizeBook(d.books[0]) : null),
      catchError((e) => { console.error(e); return of(null); })
    );
  }

  searchBooks(term: string, limit = 24): Observable<SearchResult[]> {
    const q = `
      query SearchBooks($query: String!) {
        search(query: $query, query_type: "Book", per_page: ${limit}) {
          results
        }
      }
    `;
    return this.query<{ search: { results: any } }>(q, { query: term }).pipe(
      map((d) => this.parseSearchResults(d.search?.results)),
      catchError((e) => { console.error(e); return of([]); })
    );
  }

  getByGenre(genre: string, limit = 20): Observable<Book[]> {
    return this.searchBooks(`${genre} nonfiction`, limit);
  }

  private parseSearchResults(raw: any): SearchResult[] {
    try {
      const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
      return (parsed?.hits ?? []).map((h: any) => {
        const doc = h.document ?? h;
        // image is an object { url, color, ... } in search results
        const imgObj = doc.image ?? doc.image_url ?? doc.cover_url;
        const imgUrl = typeof imgObj === 'string' ? imgObj : (imgObj?.url ?? '');
        return {
          id: doc.id,
          title: doc.title,
          slug: doc.slug,
          image: imgUrl ? { url: imgUrl, color: imgObj?.color } : undefined,
          cached_contributors: (doc.author_names ?? []).map((name: string) => ({
            author: { name }
          })),
          rating: doc.rating,
          users_read_count: doc.users_count ?? doc.users_read_count,
        } as SearchResult;
      });
    } catch (e) {
      console.error('Search parse error:', e);
      return [];
    }
  }
}
