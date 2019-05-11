import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  @Input() products;
  @Input() cart;
  @Output() save = new EventEmitter();

  ngOnInit() {
  }

  add(index) {
    if(void 0 === this.cart[index]) {
      this.cart[index] = 1;
      console.log(this.cart);
    } else {
      this.cart[index]++;
      console.log(this.cart);
      this.saveObj();
    }    
  }

  saveObj() {
    this.save.emit();
  }

  

}
