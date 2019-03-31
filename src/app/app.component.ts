import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  product: Product;

  constructor(){
    this.product = new Product(
      'NICEHAT',
      'A nice black hat',
      'resources/images/product/black-hat.jpg',
      ['Men', 'Accessories', 'HATS'],
      29.99
    );
  }
}
