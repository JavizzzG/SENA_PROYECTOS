import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCars } from './app-cars';

describe('AppCars', () => {
  let component: AppCars;
  let fixture: ComponentFixture<AppCars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
