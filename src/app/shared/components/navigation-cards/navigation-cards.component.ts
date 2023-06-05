import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationCard } from './models/navigation-card.model';

@Component({
  selector: 'app-navigation-cards',
  templateUrl: './navigation-cards.component.html',
  styleUrls: []
})
export class NavigationCardsComponent {
  @Input() cards: NavigationCard[] = [];

  constructor(private router: Router) {}

  navigateToPage(pageName: string) {
    this.router.navigate([pageName]);
  }
}
