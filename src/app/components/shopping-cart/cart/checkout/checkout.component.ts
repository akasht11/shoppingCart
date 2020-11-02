import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: any;
  cartTotal: number;
  
  constructor(private pservice: ProductService) { }

  ngOnInit() {
    this.cartItems = this.pservice.cartCopy;
    this.cartTotal = this.pservice.cartAmout;
  }

}
