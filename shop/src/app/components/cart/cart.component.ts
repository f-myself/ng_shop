import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() products;
  @Input() cart;
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove(index) {
    this.cart.splice(index, 1);
    this.saveObj();
  }

  saveObj() {
    this.save.emit();
  }

}
