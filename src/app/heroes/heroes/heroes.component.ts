import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../shared/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {

  // Inject the services
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

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

  // Method to navigate to the details page when the button is clicked
  goToDetails(): void {
    let link = ['/details', this.selectedHero.id];
    this.router.navigate(link);
  }

  // Add the hero to the db and push it on the array
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  // Delete the hero and show the new list without the hero
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        // Check if the hero is selected
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}
