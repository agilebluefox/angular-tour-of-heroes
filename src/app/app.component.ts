import { Component } from '@angular/core';

import { Hero } from './shared/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  constructor (private heroService: HeroService) {}
  // Add a title property
  title = 'Tour of Heroes';
  // Add a selected hero property
  selectedHero: Hero;
  // Public property to expose the heroes array
  // for binding.
  heroes: Hero[];

  // Method to select a hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
