import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademyComponent } from './academy/academy.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {
    path: "",
    redirectTo: '/bootcamp', pathMatch: 'full',
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "bootcamp",
    component: AcademyComponent,
  },
  { path: '**', redirectTo: '/bootcamp' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
