import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsForm } from './cars-form';

describe('CarsForm', () => {
  let component: CarsForm;
  let fixture: ComponentFixture<CarsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
