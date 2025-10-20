import { Component, input, output, effect, computed, signal } from '@angular/core';
import { CarsInterface } from '../app-cars/app-cars';

@Component({
  selector: 'app-porsche',
  imports: [],
  templateUrl: './porsche.html',
  styleUrl: './porsche.css'
})

export class Porsche {
  porsche = input<CarsInterface[]>();

  carSelected = output<string[]>();

  carsSelected = signal<string[]>([]);

  carsSelectedSend = computed(() => this.carsSelected());


  handleSelectedCar(name: string){
    this.carsSelected.update((array) => [...array, name]);
  }

  handleUnselectCar(name: string){
    this.carsSelected.update((array) => array.filter(i => i != name));
  }

  isCarSelected = (name: string) => this.carsSelected().includes(name);

  constructor(){
    effect(() => {
      this.carSelected.emit(this.carsSelected());
    }) 
  }

}
