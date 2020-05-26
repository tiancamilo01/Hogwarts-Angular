import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HousesComponent } from './components/houses/houses.component';
import { SchoolYearComponent } from './components/school-year/school-year.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { DirectorsComponent } from './components/directors/directors.component';
import { CourseAssessmentComponent } from './components/course-assessment/course-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    NavbarComponent,
    HousesComponent,
    SchoolYearComponent,
    TeachersComponent,
    DirectorsComponent,
    CourseAssessmentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
