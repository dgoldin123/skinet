import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit, OnDestroy {
  @ViewChild('search', {static: false}) searchTerm: ElementRef; //<input #search
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  shopParams: ShopParams;

  totalCount: number;
  sortOptions = [
    {name: 'By Name', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'},
  ];
  
  productSub: Subscription;
  brandSub: Subscription;
  typeSub: Subscription;

  constructor(private shopService: ShopService) {
    this.shopParams = this.shopService.getShopParams();
   }

  ngOnInit() {
    this.getProducts(true);
    this.getBrands();
    this.getTypes();
  }

  getProducts(useCache = false){
    //returns an observable - subscribe
    this.productSub = this.shopService.getProducts(useCache).subscribe(response => {
      this.products = response.data;
      //this.shopParams.pageNumber = response.pageIndex;
      //this.shopParams.pageSize = response.pageSize;
      this.totalCount = response.count;
      }, error => {
        console.log(error);
      }
    );
  }
  
  getBrands(){
    this.brandSub = this.shopService.getBrands().subscribe(response => {
      this.brands = [{id: 0, name: 'All'}, ...response];
      }, error => {
        console.log(error);
      }
    );
  }

  getTypes(){
    this.typeSub = this.shopService.getTypes().subscribe(response => {
      this.types =  [{id: 0, name: 'All'}, ...response];
      }, error => {
        console.log(error);
      }
    );
  }

  onBrandSelected(brandId: number){
    const params = this.shopService.getShopParams();
    params.brandId = brandId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onTypeSelected(typeId: number){
    const params = this.shopService.getShopParams();
    params.typeId = typeId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onSortSelected(sort: string){
    const params = this.shopService.getShopParams();
    params.sort = sort;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onPageChanged(event: any){
    const params = this.shopService.getShopParams();
    if (params.pageNumber !== event){
      params.pageNumber = event;
      this.shopService.setShopParams(params);
      this.getProducts(true);
    }
  }

  onSearch(){
    const params = this.shopService.getShopParams();
    params.search = this.searchTerm.nativeElement.value;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
   }

  onReset(){
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams(); //resets all properties to default values
    this.shopService.setShopParams(this.shopParams);
    this.getProducts();
  }
  
  ngOnDestroy(){
    this.productSub.unsubscribe();
    this.brandSub.unsubscribe();
    this.typeSub.unsubscribe();
  }

}
