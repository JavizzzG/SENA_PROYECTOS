import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface formData {
  name: string,
  description: string,
  price: string
}

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
  productForm: FormGroup;
  name: FormControl;
  description: FormControl;
  price: FormControl;

  mapForm = signal<formData[]>([]);

  constructor (){
    this.name = new FormControl("");
    this.description = new FormControl("");
    this.price = new FormControl("");

    this.productForm = new FormGroup({
      name: this.name,
      description: this.description,
      price: this.price
    })
  }

  handleSubmitFormProduct() {
    console.log(this.productForm.value);
    this.mapForm.update((array) => [...array, this.productForm.value]);
  }

}
