import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { Reviews } from './reviews/reviews';
import { Home } from './home/home';
import { NgxSpinnerModule } from "ngx-spinner";
import { PageNotFound } from './page-not-found/page-not-found';
import { AppRoutingRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { Products } from './products/products';
@NgModule({
  declarations: [
    App,
    Navbar,
    Products,
    AboutUs,
    ContactUs,
    Reviews,
    Home,
    PageNotFound,
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
