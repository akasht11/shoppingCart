import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Marigold', 'Marigolds in the garden are cheerful annuals that thrive in bright sunlight.', 250, 'assets/img/marigold.jpg'),
    new Product(2, 'Night Jasmine', 'One of the beautiful plants whose flowers fall on the ground after blooming.', 500, 'assets/img/prajakt.jpg'),
    new Product(3, 'Mogra', 'The beautiful white flowers have a strong, but pleasant scent that is enduring.', 300, 'assets/img/mogra.jpg'),
    new Product(4, 'Sonchafa', 'It is known for its fragrant flowers, and its timber used in woodworking', 500, 'assets/img/sonchafa.jpg'),
    new Product(5, 'Hibiscus', 'Hibiscus plants are known for their large, colorful flowers and medical use', 150, 'assets/img/hibiscus.jpg'),
    new Product(6, 'Zinnia', 'Zinnia is a genus of plants of the sunflower tribe within the daisy family', 150, 'assets/img/zinnia.jpg'),
  ];

  cartCopy = [];

  cartAmout : number;
  
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

}
