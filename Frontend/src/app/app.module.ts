import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {Routes, RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
const appRoutes: Routes = [
 
  {path: 'makeUp-products', component: ProductListComponent},
  {path: 'skinCare-products', component: ProductListComponent},
 
];
@NgModule({
  declarations: [	
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    NavBarComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
