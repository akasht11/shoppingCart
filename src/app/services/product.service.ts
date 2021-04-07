import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Hibiscus', 'जास्वंद ', 'Hibiscus plants are known for their large, colorful flowers and medical use', 275, 'assets/img/hibiscus.jpg'),
    new Product(2, 'Night Jasmine', 'पारिजातक', 'One of the beautiful plants whose flowers fall on the ground after blooming.', 500, 'assets/img/prajakt.jpg'),
    new Product(3, 'Marigold', 'झेंडू', 'Marigolds in the garden are cheerful annuals that thrive in bright sunlight.', 150, 'assets/img/marigold.jpg'),
    new Product(4, 'Magnolia champaca', 'सोनचाफा', 'It is known for its fragrant flowers, and its timber used in woodworking', 300, 'assets/img/sonchafa.jpg'),
    new Product(5, 'Zinnia', 'झेंडू ', 'Zinnia is a genus of plants of the sunflower tribe within the daisy family', 450, 'assets/img/zinnia.jpg'),
    new Product(6, 'Jasmine sambac', 'मोगरा', 'The beautiful white flowers have a strong, but pleasant scent that is enduring.', 225, 'assets/img/mogra.jpg'),
  ];

  cartCopy = [];

  cartAmout : number;
  
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

}
