import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlowGirlService } from './services/glow-girl.service';

const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'makeUp-products', component: ProductListComponent },
  { path: 'skinCare-products', component: ProductListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [GlowGirlService],
  bootstrap: [AppComponent],
})
export class AppModule {}

