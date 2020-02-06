import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../models/users';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(user: User) {
    this.authService.loginUser(this.user).subscribe(
      res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Successfull!',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profile']);
      }),
      err => Swal.fire('Error!', 'Something went wrong!', 'error');
    this.router.navigate(['/login']);

  }

}
