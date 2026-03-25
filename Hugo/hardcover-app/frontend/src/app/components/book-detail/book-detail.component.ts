import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HardcoverService } from '../../services/hardcover.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private svc = inject(HardcoverService);

  book = signal<Book | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);
  imgError = false;

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.svc.getBook(slug).subscribe({
      next: (b) => { this.book.set(b); this.loading.set(false); },
      error: (e) => { this.error.set(e.message); this.loading.set(false); },
    });
  }

  get authors(): string {
    return this.book()?.cached_contributors?.map((c) => c.author.name).join(', ') ?? 'Unknown Author';
  }

  get ratingDisplay(): string {
    const r = this.book()?.rating;
    return r ? (r / 2).toFixed(2) : '—';
  }

  get stars(): number[] {
    const r = Math.round((this.book()?.rating ?? 0) / 2);
    return Array(5).fill(0).map((_, i) => (i < r ? 1 : 0));
  }

  get paragraphs(): string[] {
    return (this.book()?.description ?? '').split('\n').filter(Boolean);
  }

  get coverUrl(): string {
    const url = this.book()?.image?.url ?? '';
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `https://hardcover.app${url}`;
  }

  onImgError() { this.imgError = true; }
}
