import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {path:'create',  component: CreateProductComponent  },
  {path:':id', component: ProductsDetailsComponent, pathMatch: 'full'},
  {path: '', component: ProductsListComponent, pathMatch: 'full'}    
]

@NgModule({
  declarations: [ProductsDetailsComponent, ProductsListComponent, CreateProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ProductsListComponent, ProductsDetailsComponent, CreateProductComponent]
})
export class ProductsDashboardModule {

  constructor(){
    console.log('products dashboard was loaded');
  }
 }
