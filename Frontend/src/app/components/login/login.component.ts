import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../models/users';
import { AuthService } from '../../services/auth.service';

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
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profile']);
      },
      err => console.error(err));
    this.router.navigate(['/login']);

  }

}
