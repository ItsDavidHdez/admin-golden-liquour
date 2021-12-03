import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
declare const jQuery: any;
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: any = {};

  constructor(private _adminService: AdminService) {}

  ngOnInit(): void {}

  login(form: NgForm): void {
    let data = {
      email: this.user.email,
      password: this.user.password,
    };

    this._adminService.login_admin().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
