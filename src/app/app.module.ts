import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroService } from './services/hero.service';

import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
