import { Injectable } from '@angular/core';

@Injectable()
export class ShopService {

  constructor() { }

  products = [
    {title: 'product1', price: 25},
    {title: 'product2', price: 32},
    {title: 'product3', price: 153},
    {title: 'product4', price: 54},
    {title: 'product5', price: 199},
  ];

  cart = JSON.parse(localStorage.cartNg || '[]');

  save() {
    localStorage.cartNg = JSON.stringify(this.cart);
  }

}
