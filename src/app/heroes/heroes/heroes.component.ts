import { Component, OnInit } from '@angular/core';

import { Hero } from '../../shared/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  // Add a selected hero property
  selectedHero: Hero;
  // Public property to expose the heroes array
  // for binding.
  heroes: Hero[];

  // Use the OnInit hook to call the getHeroes Method
  // so the data can be retrieved to add to the page
  ngOnInit(): void {
        this.getHeroes();
  }

  // Method to select a hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Method to get the heroes from the service
  getHeroes(): void {
    // When the Promise resolves, set the heroes to the array
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

}
