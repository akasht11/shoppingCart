import { IterableDiffers, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartPageComponent } from './components/shopping-cart/cart/cart-page/cart-page.component';
import { CheckoutComponent } from './components/shopping-cart/cart/checkout/checkout.component';

const routes: Routes = [
  { path:'', component: ShoppingCartComponent},
  { path: 'cartpage', component: CartPageComponent},
  { path: 'checkout', component: CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponets = [ShoppingCartComponent, CartPageComponent, CheckoutComponent]; 
