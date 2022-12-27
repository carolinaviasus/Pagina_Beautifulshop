import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [
  {
  path:'', component:ProductsComponent
  },
  {
    path:'product-view/:id',component:ProductViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
