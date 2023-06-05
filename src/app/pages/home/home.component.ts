import { Component } from '@angular/core';
import { StarRailRoute } from 'src/app/routes/routes';
import { NavigationCard } from 'src/app/shared/components/navigation-cards/models/navigation-card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {
  cards: NavigationCard[] = [
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
