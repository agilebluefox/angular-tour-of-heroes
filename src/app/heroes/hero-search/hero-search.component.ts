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


  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
