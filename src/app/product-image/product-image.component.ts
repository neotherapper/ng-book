import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  constructor() { }

  ngOnInit() {
  }

}
