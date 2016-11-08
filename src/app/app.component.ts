import { Component } from '@angular/core';

// Create a hero class
export class Hero {
  id: number;
  name: string;
}

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
}
