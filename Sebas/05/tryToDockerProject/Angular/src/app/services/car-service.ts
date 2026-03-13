import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Car {
  id: number;
  name: string;
  year: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'http://localhost:8080/sebas/api/car';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  createCar(car: Omit<Car, 'id'>): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }
}
