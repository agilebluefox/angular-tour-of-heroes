import { Component } from '@angular/core';

// Create a hero class
export class Hero {
  id: number;
  name: string;
}

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
  // Add the hero property
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // Public property to expose the heroes array
  // for binding.
  heroes = HEROES;
}
