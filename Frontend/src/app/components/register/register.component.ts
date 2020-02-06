import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../models/users';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: 0,
    username: '',
    password: '',
    email: '',
    image: '',
    created_at: new Date()
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  /*saveNewUser() {
    console.log(this.user);
    delete this.user.created_at;
    this.authService.registerUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/profile']);
      },
      err => console.error(err)
    );
  }*/

  saveNewUser() {
    Swal.fire({
      title: 'Are you want Save the New User?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save New User!'
    }).then(result =>{
      if (result.value) {
        //Want Register
        console.log(this.user);
        delete this.user.created_at;
        this.authService.registerUser(this.user).subscribe(
          res => {
          console.log(res);
          this.router.navigate(['/profile']);
      },
      err => Swal.fire('Error!', 'Something went wrong!', 'error')
    );
    Swal.fire('User Registered!', 'User selected has been registered!.', 'success')
    } 
    })
  }

}
