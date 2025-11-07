import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-app',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ng-class-app.html',
  styleUrl: './ng-class-app.css'
})
export class NgClassApp {

  statusH1: number = 1;

  complement: boolean = false;

  changeStatusH1(x: number){
    this.statusH1 = x;
  }

  changeComplement(){
    this.complement = !this.complement;
  }
}
