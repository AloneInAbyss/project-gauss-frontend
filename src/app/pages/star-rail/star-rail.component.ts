import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { StarRailRoute } from 'src/app/routes/routes';
import { NavigationCard } from 'src/app/shared/components/navigation-cards/models/navigation-card.model';

@Component({
  selector: 'app-star-rail',
  templateUrl: './star-rail.component.html',
  styleUrls: []
})
export class StarRailComponent {
  constructor(private t: TranslocoService) {}

  cards: NavigationCard[] = [
    {
      subtitle: this.t.translate('homeCards.starRail.relicsHomeCard.subtitle'),
      title: this.t.translate('homeCards.starRail.relicsHomeCard.title'),
      content: this.t.translate('homeCards.starRail.relicsHomeCard.content'),
      route: '/' + StarRailRoute.path,
      button: this.t.translate('button.go')
    }
  ];
}
