import { Component, inject } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { CarService } from '../../services/car-service';

@Component({
  selector: 'app-cars',
  imports: [Navbar],
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})
export class Cars {
  carService = inject(CarService);
}
