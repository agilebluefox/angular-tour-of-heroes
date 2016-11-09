import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// Get the heroes array and the hero class definition
import { Hero } from '../shared/hero';

@Injectable()
export class HeroService {

  // Provide a URL to the heroes data in the "fake" web api
  private heroesUrl = 'app/heroes';  // URL to web api

  // Setup http headers
  private headers = new Headers({'Content-Type': 'application/json'});

  // Method to handle errors if the http request fails
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  // Inject the Http Module
  constructor(private http: Http) { }

  // Method to get the list of heroes
  // Return a Promise
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
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

  // Update the hero
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
  }

}
