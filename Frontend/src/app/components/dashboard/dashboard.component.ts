import { Component, OnInit} from '@angular/core';

import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: any = [];
  userlogged: any = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUsers();
    this.dataUser();
  }

  getUsers() {
    this.authService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  dataUser() {
    this.authService.dataUser().subscribe(
      res => {
        this.userlogged = res;
      },
      err => console.error(err)
    );
  }

  deleteUser(id:string) {
    Swal.fire({
      title:'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        //Want Delete
        this.authService.deleteUser(id).subscribe(
          res => {
            console.log(res);
            this.getUsers();
          },
          err => Swal.fire('Error!', 'Something went wrong!', 'error')
        );
        Swal.fire('Deletes!', 'User selected has been deleted!.', 'success')
      }
    })
  }

}
