import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HardcoverService } from '../../services/hardcover.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { SearchResult } from '../../models/book.model';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private svc = inject(HardcoverService);

  results = signal<SearchResult[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  query = signal('');

  ngOnInit() {
    this.route.queryParamMap.subscribe((p) => {
      const q = p.get('q') ?? '';
      this.query.set(q);
      if (q) this.search(q);
      else { this.results.set([]); this.loading.set(false); }
    });
  }

  private search(term: string) {
    this.loading.set(true);
    this.error.set(null);
    this.svc.searchBooks(term).subscribe({
      next: (r) => { this.results.set(r); this.loading.set(false); },
      error: (e) => { this.error.set(e.message); this.loading.set(false); },
    });
  }
}
