import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { StarRailRoute } from 'src/app/routes/routes';
import { NavigationCard } from 'src/app/shared/components/navigation-cards/models/navigation-card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {
  constructor(private t: TranslocoService) {}

  cards: NavigationCard[] = [
    {
      subtitle: this.t.translate('homeCards.starRailHomeCard.subtitle'),
      title: this.t.translate('homeCards.starRailHomeCard.title'),
      content: this.t.translate('homeCards.starRailHomeCard.content'),
      route: '/' + StarRailRoute.path,
      button: this.t.translate('button.go')
    }
  ];
}
