import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerNovoComponent } from './customer-novo.component';
import { TestChildComponent } from './test-child/test-child.component';

const routes: Routes = [
{ path: '', component: CustomerNovoComponent },
{ path: 'testChild', component: TestChildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerNovoRoutingModule { }
