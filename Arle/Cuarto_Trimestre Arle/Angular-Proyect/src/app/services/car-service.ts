import { Injectable, signal } from '@angular/core';
import Car from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars = signal<Car[]>([
    {
      name : "Mazda CX-30",
      price : 123,
      description : "No hay descripción"
    
    }
  ]);

  insertCar(car: Car){
    this.cars.update((a) => [...a, car]);
  }

  getCars() {
    return this.cars();
  }
  
}
