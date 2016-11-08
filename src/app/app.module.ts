import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HeroService } from './services/hero.service';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
