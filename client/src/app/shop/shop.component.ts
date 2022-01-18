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
  @ViewChild('search', {static: true}) searchTerm: ElementRef; //<input #search
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  shopParams = new ShopParams();
  totalCount: number;
  sortOptions = [
    {name: 'By Name', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'},
  ];

  productSub: Subscription;
  brandSub: Subscription;
  typeSub: Subscription;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(){
    //returns an observable - subscribe
    this.productSub = this.shopService
      .getProducts(this.shopParams)
      .subscribe(response => {
      this.products = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
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
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number){
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(sort: string){
    this.shopParams.sort = sort;
    this.getProducts();
  }

  onPageChanged(event: any){
    if (this.shopParams.pageNumber !== event){
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  onSearch(){
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
   }

  onReset(){
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams(); //resets all properties to default values
    this.getProducts();
  }

  ngOnDestroy(){
    this.productSub.unsubscribe();
    this.brandSub.unsubscribe();
    this.typeSub.unsubscribe();
  }

}
