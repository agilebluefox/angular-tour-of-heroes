import { Component } from '@angular/core';

import { Hero } from './shared/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
