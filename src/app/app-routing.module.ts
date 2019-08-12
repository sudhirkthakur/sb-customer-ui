import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerGetComponent } from './customer-get/customer-get.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'get',
    pathMatch: 'full'
  },
  {
    path: 'get',
    component: CustomerGetComponent
  },
  {
    path: 'add',
    component: CustomerAddComponent
  },
  {
    path: 'update/:id',
    component: CustomerUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
