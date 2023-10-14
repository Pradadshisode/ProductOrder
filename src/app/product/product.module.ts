import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { PageModule } from '@abp/ng.components/page';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    SharedModule,
    PageModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
