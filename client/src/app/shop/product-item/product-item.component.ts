import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  //recieve property/data from parent (shop component)
  @Input() product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
