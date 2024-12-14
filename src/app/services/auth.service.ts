import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor() { }
  login(uname: string, pword: string) {
    if (uname === 'mani' && pword === '1234') {
      return 200;
    } else {
      return 403;
    }
  }

  logout() {
    this['router'].navigate(['login']);
  }
}
