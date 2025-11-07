import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  //Forma moderna con inject

  userService2 = inject(UserService)


  constructor(public userService: UserService){}

}
