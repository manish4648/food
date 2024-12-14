import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Foods{
  return this.getAll().find(food=>food.id ==id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    return tag=="All" ?
    this.getAll() : this.getAll().filter(food=>food.tags?.includes(tag));
  }

getAllTag():Tag[]{
  return[
    {name:'All',count:8},
    {name:'dinner',count:5},
    {name:'party',count:1},
    {name:'drinks',count:2}

  ]
}
getAll():Foods[]{
  return[
    {
      id:1,
    price:660,
    nameit:'mutton biryani',
    fav:false,
    star:4.5,
    tags:['lunch','dinner'],
    imageUrl!:'/assets/img1.jpg',
    coolTime!:'10-15',
    origins!:['india','- hyd'],
    },

    {
      id:2,
    price:360,
    nameit:'chicken biryani',
    fav:false,
    star:5,
    tags:['lunch','dinner'],
    imageUrl!:'/assets/img2.jpg',
    coolTime!:'10-15',
    origins!:['india','- hyd'],
},

{
  id:3,
price:460,
nameit:'fish biryani',
fav:false,
star:4.5,
tags:['lunch','dinner'],
imageUrl!:'/assets/img3.jpg',
coolTime!:'10-15',
origins!:['india','- hyd'],
},

{
  id:4,
price:660,
nameit:'prawns biryani',
fav:false,
star:4.5,
tags:['lunch','dinner'],
imageUrl!:'/assets/img4.jpg',
coolTime!:'10-15',
origins!:['india','- hyd'],
},{
  id:5,
price:260,
nameit:'veg biryani',
fav:false,
star:4.5,
tags:['lunch','dinner'],
imageUrl!:'/assets/img5.jpg',
coolTime!:'10-15',
origins!:['india','- hyd'],
},{
  id:6,
price:160,
nameit:'noodles',
fav:false,
star:4,
tags:['lunch','dinner'],
imageUrl!:'/assets/img6.jpg',
coolTime!:'10',
origins!:['india','& china',],
},

{
  id:7,
price:750,
nameit:'cakes',
fav:false,
star:4.5,
tags:['party'],
imageUrl!:'/assets/img7.jpg',
coolTime!:'30',
origins!:['all countries'],
},

{
  id:8,
price:50,
nameit:'thick shakes',
fav:false,
star:4.5,
tags:['drinks'],
imageUrl!:'/assets/img8.jpg',
coolTime!:'10',
origins!:['all countries'],
}


]}
}
