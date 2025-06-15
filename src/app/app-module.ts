import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Courses } from './courses/courses';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { Reviews } from './reviews/reviews';
import { Home } from './home/home';
@NgModule({
  declarations: [
    App,
    Navbar,
    Courses,
    AboutUs,
    ContactUs,
    Reviews,
    Home,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
