import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: IProduct;
  prodSub: Subscription

  constructor(
    private shopService: ShopService, 
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService
  ) { 
    this.bcService.set('@productDetails',' ');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    this.prodSub = this.shopService
      .getProduct(+this.activatedRoute.snapshot.paramMap
      .get('id'))
      .subscribe(product => {
        this.product = product;
        this.bcService.set('@productDetails', product.name);
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(){
    this.prodSub.unsubscribe();
  }

}
