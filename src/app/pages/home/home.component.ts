import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCard } from 'src/app/models/cards/home-card';

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
        route: '/star-rail',
        button: 'GO'
      },
      {
        subtitle: 'Guide',
        title: 'Genshin Impact',
        content:
          'Tools for calculations on artifacts stats, level up materials, and more!',
        route: '/',
        button: 'GO'
      }
    ];
  }

  navigateToPage(pageName: string) {
    this.router.navigate([pageName]);
  }
}
