import { Component, inject, signal, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent implements OnInit {
  private router = inject(Router);

  @ViewChild('searchInput') searchInputRef!: ElementRef<HTMLInputElement>;

  searchOpen = signal(false);
  scrolled = signal(false);

  ngOnInit() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const q = this.router.parseUrl(this.router.url).queryParams['q'] ?? '';
        if (this.searchInputRef?.nativeElement) {
          this.searchInputRef.nativeElement.value = q;
        }
      });
  }

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 40); }

  toggleSearch() {
    const isOpen = !this.searchOpen();
    this.searchOpen.set(isOpen);
    if (isOpen) {
      setTimeout(() => this.searchInputRef?.nativeElement?.focus(), 60);
    }
  }

  closeSearch() { this.searchOpen.set(false); }

  submitSearch() {
    const q = this.searchInputRef?.nativeElement?.value?.trim();
    if (!q) return;
    this.router.navigate(['/search'], { queryParams: { q } });
    this.closeSearch();
  }

  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') this.closeSearch();
    if (e.key === 'Enter') this.submitSearch();
  }

  onFormSubmit(e: Event) {
    e.preventDefault();
    this.submitSearch();
  }
}
