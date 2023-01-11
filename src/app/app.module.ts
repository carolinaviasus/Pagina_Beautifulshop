import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryTabComponent } from './components/category-tab/category-tab.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryTabComponent,
    ProductCardComponent,
    ProductsComponent,
    ProductViewComponent,
    HeaderComponent,
    HomeComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
