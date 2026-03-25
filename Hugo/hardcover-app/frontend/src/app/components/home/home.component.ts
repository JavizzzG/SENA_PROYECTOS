import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HardcoverService } from '../../services/hardcover.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../../models/book.model';

const GENRES = [
  { label: 'All', value: '' },
  { label: 'Biography', value: 'biography' },
  { label: 'History', value: 'history' },
  { label: 'Science', value: 'science' },
  { label: 'Economics', value: 'economics' },
  { label: 'Politics', value: 'politics' },
  { label: 'Philosophy', value: 'philosophy' },
  { label: 'Psychology', value: 'psychology' },
  { label: 'Technology', value: 'technology' },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, BookCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private svc = inject(HardcoverService);

  books = signal<Book[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);
  activeGenre = signal('');
  genres = GENRES;
  heroCoverError = false;

  get featured(): Book | null { return this.books()[0] ?? null; }
  get gridBooks(): Book[] { return this.books().slice(1); }

  ngOnInit() { this.loadBooks(); }

  loadBooks(genre = '') {
    this.loading.set(true);
    this.error.set(null);
    this.activeGenre.set(genre);
    this.heroCoverError = false;

    const obs = genre
      ? this.svc.getByGenre(genre, 21)
      : this.svc.getTrendingNonfiction(21);

    obs.subscribe({
      next: (books) => { this.books.set(books); this.loading.set(false); },
      error: (e) => { this.error.set(e.message); this.loading.set(false); },
    });
  }

  get featuredAuthor(): string {
    return this.featured?.cached_contributors?.[0]?.author?.name ?? 'Unknown Author';
  }

  get featuredRating(): string {
    return this.featured?.rating ? (this.featured.rating / 2).toFixed(1) : '—';
  }

  get featuredDescLength(): number {
    return this.featured?.description?.length ?? 0;
  }

  get activeGenreLabel(): string {
    if (!this.activeGenre()) return 'Trending Now';
    return this.genres.find((g) => g.value === this.activeGenre())?.label ?? 'Trending Now';
  }
}
