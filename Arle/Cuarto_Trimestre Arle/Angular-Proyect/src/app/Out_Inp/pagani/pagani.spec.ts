import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagani } from './pagani';

describe('Pagani', () => {
  let component: Pagani;
  let fixture: ComponentFixture<Pagani>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagani]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagani);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
