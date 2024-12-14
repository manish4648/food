import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:Foods[]=[];
  food!: Foods;
  constructor(private fs:FoodService, private router:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      if(params['serachItem'])
      this.foods=this.fs.getAll().filter(food => food.nameit.toLocaleLowerCase().includes(params['serachItem'].toLocaleLowerCase()));
      else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag'])
      else
      this.foods=this.fs.getAll();
    })
  }
addToCart(){
 /* this.cartService.addToCart(this.food);
 this.router.navigate('/cart-page')*/
}
}
