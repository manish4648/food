import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag:boolean=true
  title = 'food';
  apply(value:string){
    if(value=='login'){
      this.flag=value=="login"?true :false;
    }
}
}
