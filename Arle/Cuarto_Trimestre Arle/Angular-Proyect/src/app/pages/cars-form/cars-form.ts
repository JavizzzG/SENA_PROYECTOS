import { Component, inject } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { CarService } from '../../services/car-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cars-form',
  imports: [Navbar, ReactiveFormsModule],
  templateUrl: './cars-form.html',
  styleUrl: './cars-form.css'
})
export class CarsForm {
  cars = inject(CarService);
  fb = inject(FormBuilder);

  carForm = this.fb.nonNullable.group({
    name: ["",  Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    description: [""]
  })



  handleSubmitCarForm(){
    this.cars.insertCar(this.carForm.getRawValue())
    this.carForm.reset()
  }

  get name(){
    return this.carForm.get("name")!;
  }

  get price(){
    return this.carForm.get("price")!;
  }

  get description(){
    return this.carForm.get("description")!;
  }
}
