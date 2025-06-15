import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { Reviews } from './reviews/reviews';
import { PageNotFound } from './page-not-found/page-not-found';

const routes: Routes = [
  {
    path:'home',
    component: Home
  },
  {
    path: 'courses',
    component: Courses
  },
  {
    path: 'about-us',
    component: AboutUs
  },
  {
    path:'contact-us',
    component: ContactUs
  },
  {
    path: 'reviews',
    component: Reviews
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    component: PageNotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
