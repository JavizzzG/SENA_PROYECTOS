import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsListComponent } from './components/cars-list/cars-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarsListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular');
}
