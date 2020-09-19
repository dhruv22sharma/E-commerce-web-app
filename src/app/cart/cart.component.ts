import { Component, OnInit } from '@angular/core';
import { Cartitem } from 'src/app/models/cartitems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartitems: Cartitem[] = [
    /* new Cartitem(1, 1, 1, 100, 'medicine', 'assets/pictures/medicine.jpg'),
    new Cartitem(2, 2, 1, 200, 'kirana', 'assets/pictures/kirana.png'),
    new Cartitem(3, 3, 1, 1000, 'clothing', 'assets/pictures/clothing.png'),
    new Cartitem(4, 4, 1, 500, 'cosmetics', 'assets/pictures/cosmetics.jpg'),*/
  ];
  carttotal: number = 0;
  cartGST: number = 0;
  cartitemsprice: number = 0;
  cartdeliverycharges: number = 0;
  constructor() {}
  ngOnInit() {
    this.cartitems.forEach((item) => {
      this.cartitemsprice += item.quantity * item.price;
    });
    this.cartGST = this.cartitemsprice * 0.18;
    this.cartdeliverycharges = this.cartitemsprice * 0.1;
    this.carttotal =
      this.cartitemsprice + this.cartdeliverycharges + this.cartGST;
  }
}
