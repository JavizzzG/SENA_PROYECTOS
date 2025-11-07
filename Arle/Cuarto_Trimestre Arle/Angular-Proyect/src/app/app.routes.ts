import { Routes } from '@angular/router';
import { Cars } from './components/cars/cars';
import { Bmw } from './components/Out_Inp/bmw/bmw';
import { AppCars } from './components/Out_Inp/app-cars/app-cars';
import { NgClassApp } from './components/ngClass/ng-class-app/ng-class-app';
import { ReactiveForm } from './components/ReactiveForms/reactive-form/reactive-form';
import { UserComponent } from './components/user/user';

export const routes: Routes = [
    {path: "bmw", component: Bmw},
    {path: "cars", component: Cars},
    {path: "out-inp", component: AppCars},
    {path: "ngClass", component: NgClassApp},
    {path: "reactiveForm", component: ReactiveForm},
    {path: "user", component: UserComponent}
];
