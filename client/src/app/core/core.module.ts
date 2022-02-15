import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ToastrModule } from 'ngx-toastr';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../shared/shared.module';

//import { OrdersComponent } from '../orders/orders.component';
//import { OrderDetailedComponent } from '../orders/order-detailed/order-detailed.component';

//import { OrdersDetailedComponent } from './orders/orders-detailed/orders-detailed.component';
//import { OrderComponent } from './orders/orders-detailed/orders/orders.component';
//import { OrderDetailedComponent } from './orders/order-detailed/order-detailed.component'
//import { OrdersComponent } from './orders/orders.component'
//, OrdersComponent, OrderDetailedComponent

@NgModule({
  declarations: [NavBarComponent, TestErrorComponent, NotFoundComponent, ServerErrorComponent, 
    SectionHeaderComponent],
  imports: [
    CommonModule, RouterModule, BreadcrumbModule, SharedModule, 
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  exports:[
    NavBarComponent, SectionHeaderComponent
  ]
})
export class CoreModule { }
