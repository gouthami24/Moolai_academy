import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcademyComponent } from './academy/academy.component';
import { HomeComponent } from './home/home.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { HeaderComponent } from './header/header.component';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Required for Angular Material
import { MatTabsModule } from '@angular/material/tabs';  // Import MatTabsModule

@NgModule({
  declarations: [
    AppComponent,
    AcademyComponent,
    HomeComponent,
    ScrollToTopComponent,
    HeaderComponent,
    CustomCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
