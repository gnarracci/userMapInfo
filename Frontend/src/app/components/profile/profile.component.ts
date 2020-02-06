import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userlogged: any = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.dataUser();
   }

  dataUser() {
    this.authService.dataUser().subscribe(
      res => {
        this.userlogged = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
