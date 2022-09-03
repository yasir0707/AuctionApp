import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatogeriesComponent } from './catogeries/catogeries.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { ProductComponent } from './product/product.component';
import {  RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShowcategoriesComponent } from './showcategories/showcategories.component';
import { ShowsubcategoriesComponent } from './showsubcategories/showsubcategories.component';
import { ShowproductComponent } from './showproduct/showproduct.component';


const routes: Routes = [
  
  {path:'categories',component:CatogeriesComponent},
  {path:'subCategories',component:SubCategoriesComponent},
  {path:'product',component:ProductComponent},
  {path:'showcategories',component:ShowcategoriesComponent},
  {path:'showsubcategories',component:ShowsubcategoriesComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    CatogeriesComponent,
    SubCategoriesComponent,
    ProductComponent,
    ShowcategoriesComponent,
    ShowsubcategoriesComponent,
    ShowproductComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
