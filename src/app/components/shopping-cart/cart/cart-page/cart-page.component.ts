import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {

  cartItems: any;

  constructor(private pservice: ProductService) { }

  ngOnInit() {
    this.cartItems = this.pservice.cartCopy;
  }

  removeFromCart(pid: any){
    let removeIndex = this.cartItems.map(function(item) { return item.productId; }).indexOf(pid);
    this.cartItems.splice(removeIndex,1);
  }

}