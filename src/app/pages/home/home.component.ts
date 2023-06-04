import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCard } from 'src/app/models/cards/home-card';
import { StarRailRoute } from 'src/app/routes/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {
  cards: HomeCard[];

  constructor(private router: Router) {
    this.cards = [
      {
        subtitle: 'Guide',
        title: 'Honkai Star Rail',
        content:
          'Tools for calculations on artifacts stats, level up materials, and more!',
        route: '/' + StarRailRoute.path,
        button: 'GO'
      }
    ];
  }

  navigateToPage(pageName: string) {
    this.router.navigate([pageName]);
  }
}
