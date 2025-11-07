import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    this.name = new FormControl("", [Validators.required, Validators.maxLength(10)]);
    this.description = new FormControl("", Validators.maxLength(20));
    this.price = new FormControl("", Validators.required);

    this.productForm = new FormGroup({
      name: this.name,
      description: this.description,
      price: this.price
    })
  }

  handleSubmitFormProduct() {
    console.log(this.productForm.value);
    this.mapForm.update((array) => [...array, this.productForm.value]);
    this.productForm.reset();
  }

}
