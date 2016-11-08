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

}
