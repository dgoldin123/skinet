import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from './orders.component';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OrderDetailedComponent, OrdersComponent
  ],
  imports: [
    CommonModule, OrdersRoutingModule, SharedModule 
  ],
  exports: [] 
})
export class OrdersModule { }
