import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book/:slug', component: BookDetailComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: '**', redirectTo: '' },
];
