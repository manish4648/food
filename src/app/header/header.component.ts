import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigate: any;

  constructor() { }

  ngOnInit(): void {
  }
  gotoOrder(){
    this.navigate.route(['/home'])
  }
}
