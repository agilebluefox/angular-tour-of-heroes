import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from '../../services/hero-search.service';
import { Hero } from '../../shared/hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  // Producer of an observable stream
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  // Turn the stream of search terms into a stream of Hero arrays
  // and assign the result to heroes
  ngOnInit(): void {
    this.heroes = this.searchTerms
      // wait for 300ms pause in events
      .debounceTime(300)
      // ignore if the search term hasn't changed
      .distinctUntilChanged()
      // cancel and discard previous search observables
      // switch to the new observable each time 
      // if the search text is empty return an empty array
      .switchMap(term => term
        ? this.heroSearchService.search(term)
        : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        // return an empty array to clear the search result on error
        return Observable.of<Hero[]>([]);
      });
  }

  // Navigate to the details page if the hero is clicked
  goToDetails(hero: Hero): void {
    let link = ['/details', hero.id];
    this.router.navigate(link);
  }

}
