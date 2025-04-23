import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'general', component: ProductListComponent },
  { path: 'detalles/:id', component: ProductDetailComponent },
  { path: '', redirectTo: 'general', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }

@NgModule({
  imports: [
    CatalogRoutingModule,
    ProductListComponent,
    ProductDetailComponent
  ],
  exports: [CatalogRoutingModule]
})
export class CatalogModule { } 