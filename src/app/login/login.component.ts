import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppService } from '../app.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMsg = "";
  users :any;
  constructor(private auth:AuthService, private router: Router,private appService:AppService,private loginService :LoginService) { }

  ngOnInit(): void {
  this.loginService.getUser().subscribe(res=>{
    this.users = res
   })
   console.log(this.users)
  }

  login() {
    if (this.username.length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errorMsg = "Invalid Credentials";
      }
    }
  }

}