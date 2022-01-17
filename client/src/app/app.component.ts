import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'SkiNet';
  products: IProduct[];
  mySub: Subscription;
  
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.mySub = this.http.get('https://localhost:5001/api/products?pageSize=50')
      .subscribe((response: IPagination) => {
       this.products = response.data;
       // console.log(response);
      }, error => {
        console.log(error);
      }
    );
  }
  
  ngOnDestroy(){
    this.mySub.unsubscribe();
  }

}

/*

{
      "id": 0,
      "name": "string",
      "description": "string",
      "price": 0,
      "pictureUrl": "string",
      "productType": "string",
      "productBrand": "string"
    }
  ]
*/
