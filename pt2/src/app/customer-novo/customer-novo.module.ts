import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerNovoRoutingModule } from './customer-novo-routing.module';
import { CustomerNovoComponent } from './customer-novo.component';
import { TestChildComponent } from './test-child/test-child.component';


@NgModule({
  declarations: [
    CustomerNovoComponent,
    TestChildComponent
  ],
  imports: [
    CommonModule,
    CustomerNovoRoutingModule
  ]
})
export class CustomerNovoModule { }
