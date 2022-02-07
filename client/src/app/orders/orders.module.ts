import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';

@NgModule({
  declarations: [
    OrderDetailedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OrderDetailedComponent]
})
export class OrdersModule { }
