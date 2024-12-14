import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
 @Input() visilbe:boolean = false;
 @Input() notFoundMessage:string='Not Found!';
 @Input() resetLinkText:string='Reset!';
 @Input() resetLinkRoute:string='/home';

  constructor() { }

  ngOnInit(): void {
  }

}
