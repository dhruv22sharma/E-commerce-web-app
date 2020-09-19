import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    new Product(1, 'medicine', 'abc', 100, 'assets/pictures/medicine.jpg'),
    new Product(2, 'kirana', '', 200, 'assets/pictures/kirana.png'),
    new Product(3, 'clothing', '', 1000, 'assets/pictures/clothing.png'),
    new Product(4, 'cosmetics', '', 500, 'assets/pictures/cosmetics.jpg'),
  ];

  constructor() {}
  getProducts(): Product[] {
    return this.products;
  }
}
