import { Component } from '@angular/core';

import { Hero } from './shared/hero';

// Create a list of Heroes
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

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
  heroes = HEROES;

  // Method to select a hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
