import { Routes } from '@angular/router';
import { Cars2 } from './components/cars2/cars2';
import { Bmw } from './components/Out_Inp/bmw/bmw';
import { AppCars } from './components/Out_Inp/app-cars/app-cars';
import { NgClassApp } from './components/ngClass/ng-class-app/ng-class-app';
import { ReactiveForm } from './components/ReactiveForms/reactive-form/reactive-form';
import { UserComponent } from './components/user/user';
import { Home } from './pages/home/home';
import { Cars } from './pages/cars/cars';
import { CarsForm } from './pages/cars-form/cars-form';
import { CarDetail } from './pages/car-detail/car-detail';

export const routes: Routes = [
    {path: "bmw", component: Bmw},
    {path: "cars2", component: Cars2},
    {path: "out-inp", component: AppCars},
    {path: "ngClass", component: NgClassApp},
    {path: "reactiveForm", component: ReactiveForm},
    {path: "user", component: UserComponent},
    {path: "home", component: Home},
    {path: "cars", component: Cars},
    {path: "cars/:carName", component: CarDetail},
    {path: "carsForm", component: CarsForm}
];
