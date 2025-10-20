import { Routes } from '@angular/router';
import { Cars } from './cars/cars';
import { Bmw } from './Out_Inp/bmw/bmw';
import { AppCars } from './Out_Inp/app-cars/app-cars';

export const routes: Routes = [
    {path: "bmw", component: Bmw},
    {path: "cars", component: Cars},
    {path: "out-inp", component: AppCars}
];
