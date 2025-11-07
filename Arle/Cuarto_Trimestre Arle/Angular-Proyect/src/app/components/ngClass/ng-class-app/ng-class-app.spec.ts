import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassApp } from './ng-class-app';

describe('NgClassApp', () => {
  let component: NgClassApp;
  let fixture: ComponentFixture<NgClassApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
