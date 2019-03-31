import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductPriceDisplayComponent } from './product-price-display/product-price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductComponent,
    ProductImageComponent,
    ProductPriceDisplayComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
