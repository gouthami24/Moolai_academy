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
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { InstructorExperienceComponent } from './instructor-experience/instructor-experience.component';
import { CurriculumHighlightsComponent } from './curriculum-highlights/curriculum-highlights.component';
import { CourseSyllabusComponent } from './course-syllabus/course-syllabus.component';
import { FaqComponent } from './faq/faq.component';  // Import MatTabsModule
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { BookNowModalComponent } from './book-now-modal/book-now-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    AcademyComponent,
    HomeComponent,
    ScrollToTopComponent,
    HeaderComponent,
    CustomCarouselComponent,
    InstructorExperienceComponent,
    CurriculumHighlightsComponent,
    CourseSyllabusComponent,
    FaqComponent,
    BookNowModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
