import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl:any;
  private configUrl = 'assets/base.json';

  constructor(private http: HttpClient) { 
    this.apiUrl = this.loadConfig();
  }

  loadConfig(): Promise<any> {
    return this.http.get<any>(this.configUrl).toPromise().then(res => {
      this.apiUrl = res.apiUrl;  // Save the apiUrl from the config
    });
  }
}
