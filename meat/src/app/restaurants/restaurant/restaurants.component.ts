import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
})
export class RestaurantsComponent implements OnInit {

  @Input() restaurant: Restaurant

  restaurants: Restaurant[] = [
    
    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png"
      
    },
    {
      id: "burger-house",
      name: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png"
      
    }]
  constructor() { }

  ngOnInit() {
  }

}
