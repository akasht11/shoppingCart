import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: any;
  cartTotal: number;

  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',Validators.required),
    mobileNo: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormControl('',Validators.required),
    ccname: new FormControl('',Validators.required),
    ccnumber: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(16)]),
    ccexpiration: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    cccvv: new FormControl('',[Validators.required, Validators.maxLength(3)]),
  });

  constructor(private pservice: ProductService) { }

  ngOnInit() {
    this.cartItems = this.pservice.cartCopy;
    this.cartTotal = this.pservice.cartAmout;
  }

  onSubmit(){
    this.pservice.cartCopy = [];
  }

}
