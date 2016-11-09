import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: HeroDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  // Add any guard services here
  providers: []
})
export class AppRoutingModule { }
