import { Component, signal, OnInit } from '@angular/core';
import { CarService, Car } from '../../services/car-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss'
})
export class CarsListComponent implements OnInit {
  cars = signal<Car[]>([]);
  newCarName = signal('');
  newCarYear = signal<number | null>(null);
  errorMessage = signal('');

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getCars().subscribe({
      next: (data) => this.cars.set(data),
      error: () => this.errorMessage.set('No se pudo cargar la lista de carros.'),
    });
  }

  addCar(): void {
    const name = this.newCarName();
    const year = this.newCarYear();

    if (!name.trim() || !year || year <= 0) {
      this.errorMessage.set('Por favor ingresa nombre y año válidos.');
      return;
    }

    this.carService.createCar({ name: name.trim(), year }).subscribe({
      next: (createdCar) => {
        this.cars.update((cars) => [...cars, createdCar]);
        this.newCarName.set('');
        this.newCarYear.set(null);
        this.errorMessage.set('');
      },
      error: () => {
        this.errorMessage.set('Error al crear el carro. Intenta nuevamente.');
      },
    });
  }
}
