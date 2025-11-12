import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cars2 } from './cars2';

describe('Cars2', () => {
  let component: Cars2;
  let fixture: ComponentFixture<Cars2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cars2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cars2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
