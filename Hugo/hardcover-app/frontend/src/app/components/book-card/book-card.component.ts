import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input({ required: true }) book!: Book;
  @Input() rank?: number;

  imgError = false;

  get authorName(): string {
    return this.book.cached_contributors?.[0]?.author?.name ?? 'Unknown Author';
  }

  get stars(): number[] {
    const r = Math.round((this.book.rating ?? 0) / 2);
    return Array(5).fill(0).map((_, i) => (i < r ? 1 : 0));
  }

  get ratingDisplay(): string {
    return this.book.rating ? (this.book.rating / 2).toFixed(1) : '—';
  }

  get coverUrl(): string {
    const url = this.book.image?.url ?? '';
    if (!url) return '';
    // Handle relative URLs from Hardcover CDN
    if (url.startsWith('http')) return url;
    return `https://hardcover.app${url}`;
  }

  get coverColor(): string {
    return this.book.image?.color ?? '#2a2520';
  }

  onImgError() {
    this.imgError = true;
  }
}
