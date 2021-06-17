import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { TeacherPortalComponent } from './teacher-portal/teacher-portal.component';

const routes: Routes = [
  { path: 'student-form', component: StudentPortalComponent },
  { path: 'teacher-form', component: TeacherPortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }