import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'contact-us', component: ContactUsComponent, pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SlideshowModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ContactUsComponent
  ]
})
export class AppModule {}
