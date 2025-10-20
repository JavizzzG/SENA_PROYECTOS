import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Porsche } from './porsche';

describe('Porsche', () => {
  let component: Porsche;
  let fixture: ComponentFixture<Porsche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Porsche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Porsche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
