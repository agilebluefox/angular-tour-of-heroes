import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../shared/hero';

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

  constructor() { }

  ngOnInit() {
  }

}
