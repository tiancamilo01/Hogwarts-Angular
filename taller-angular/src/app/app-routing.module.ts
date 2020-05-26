import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HousesComponent } from './components/houses/houses.component';
import { SchoolYearComponent } from './components/school-year/school-year.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { DirectorsComponent } from './components/directors/directors.component';
import { CourseAssessmentComponent } from './components/course-assessment/course-assessment.component';

const routes: Routes =[
    {path: 'Houses', component: HousesComponent },
    {path: 'SchoolYear', component: SchoolYearComponent },
    {path: 'Teachers', component: TeachersComponent },
    {path: 'Directors', component: DirectorsComponent },
    {path: 'CourseAssessment', component: CourseAssessmentComponent },
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}