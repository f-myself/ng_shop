import { Component } from '@angular/core';
import { ShopService } from './services/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShopService]
})
export class AppComponent {
  products = [];
  cart = {};
  save;

  constructor (private shopService: ShopService){
    this.products = this.shopService.products;
    this.cart = this.shopService.cart;
    this.save = this.shopService.save;
  }
}
