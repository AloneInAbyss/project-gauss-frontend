import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription, take } from 'rxjs';
import { DummyRoute } from '../routes/routes';
import { AvailableLanguages } from '../shared/models/available-languages-enum';
import { LocalStorageKeys } from '../shared/models/local-storage-keys-enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent implements OnDestroy {
  availableLanguages = AvailableLanguages;
  subscription?: Subscription;

  constructor(private router: Router, private t: TranslocoService) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  changeLanguage(language: string) {
    if (this.t.getActiveLang() === language) return;

    this.subscription?.unsubscribe();
    this.subscription = this.t
      .load(language)
      .pipe(take(1))
      .subscribe(() => {
        localStorage.setItem(LocalStorageKeys.LANGUAGE, language);
        this.t.setActiveLang(language);
        this.reloadPage();
      });
  }

  reloadPage() {
    const currentRoute = this.router.url;
    this.router
      .navigateByUrl(DummyRoute.path, { skipLocationChange: true })
      .then(() => {
        this.router.navigate([currentRoute]);
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
