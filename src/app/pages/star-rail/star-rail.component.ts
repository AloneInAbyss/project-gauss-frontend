import { Component } from '@angular/core';
import { StarRailRoute } from 'src/app/routes/routes';
import { NavigationCard } from 'src/app/shared/components/navigation-cards/models/navigation-card.model';

@Component({
  selector: 'app-star-rail',
  templateUrl: './star-rail.component.html',
  styleUrls: []
})
export class StarRailComponent {
  cards: NavigationCard[] = [
    {
      subtitle: 'Info',
      title: 'Relics',
      content:
        'View each relic type, corresponding main stats and possible substats values',
      route: '/' + StarRailRoute.path,
      button: 'GO'
    }
  ];
}
