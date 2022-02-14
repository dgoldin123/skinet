import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { OrdersComponent } from './orders.component';
//import { OrderDetailedComponent } from './order-detailed/order-detailed.component';

//import { Orders2Component } from './orders2.component';
//import { Order2DetailedComponent } from './order-detailed/order2-detailed.component';

@NgModule({
  declarations: [
    //OrderDetailedComponent, OrdersComponent,
    //Orders2Component, Order2DetailedComponent
  ],
  imports: [
    CommonModule // Orders2Component, Order2DetailedComponent
  ],
  exports: [] //OrderDetailedComponent, OrdersComponent
})
export class OrdersModule { }
