import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {​ViewProductComponent} from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
{path:"product",component:ProductComponent},
{path:"view-product",component:ViewProductComponent},
{path:"update-product/:id",component:UpdateProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
