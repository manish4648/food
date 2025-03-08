import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private appService:AppService,private http:HttpClient) { }
  getUser(){
    return this.http.get(this.appService.apiUrl+'User/AllUsers')
  }
  validateUser(){}
}
