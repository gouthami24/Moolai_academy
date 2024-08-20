import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademyComponent } from './academy/academy.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {
    path: "",
    redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "academy",
    component: AcademyComponent,
  },
  { path: '**', redirectTo: '/academy' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
