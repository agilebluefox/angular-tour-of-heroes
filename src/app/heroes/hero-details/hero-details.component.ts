import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../shared/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  // This property needs to come from the AppComponent.
  // It must be an input property since it's the target
  // of the assignment from the selectedHero in the AppComponent.
  @Input() // Decorator for input properties
  hero: Hero;

  // Inject the required services
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  // Use the params observable to extract the id parameter from
  // the ActivatedRoute service then use the HeroService to get
  // the hero.
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
      .then(hero => this.hero = hero);
    });
  }

}
