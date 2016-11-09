import { Injectable } from '@angular/core';

// Get the heroes array and the hero class definition
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

// Method to get the list of heroes
// Return a Promise
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // Method to simulate a slow server response
  // The promise resolves after 2s then gets the heroes
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve => 
    setTimeout(resolve, 2000))
    .then(() => this.getHeroes());
  }

  // Method to get a hero using the id
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
    .then(heroes => heroes.find(hero => hero.id === id));
  }

}
