import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Observable, Subscription, startWith, take } from 'rxjs';
import { DummyRoute, HomeRoute } from '../routes/routes';
import { AvailableLanguages } from '../shared/models/available-languages-enum';
import { LocalStorageKeys } from '../shared/models/local-storage-keys-enum';
import { DarkModeService } from '../shared/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent implements OnDestroy {
  availableLanguages = AvailableLanguages;
  darkMode$: Observable<boolean>;
  languageSubscription?: Subscription;
  darkModeSubscription: Subscription;

  constructor(
    private router: Router,
    private darkModeService: DarkModeService,
    private t: TranslocoService,
    private renderer: Renderer2
  ) {
    this.darkMode$ = this.initializeDarkModeObservable();
    this.darkModeSubscription = this.subscribeToDarkModeService();
  }

  private initializeDarkModeObservable() {
    return this.darkModeService
      .getDarkModeObservable()
      .pipe(startWith(this.darkModeService.getCurrentDarkModePreference()));
  }

  private subscribeToDarkModeService(): Subscription {
    return this.darkMode$.subscribe((isDarkMode) => {
      !isDarkMode
        ? this.renderer.addClass(document.body, 'light-mode')
        : this.renderer.removeClass(document.body, 'light-mode');
    });
  }

  private reloadPage() {
    const currentRoute = this.router.url;
    
    const targetRoute =
      currentRoute !== `/${DummyRoute.path}`
        ? `/${DummyRoute.path}`
        : `/${HomeRoute.path}`;

    this.router
      .navigateByUrl(targetRoute, { skipLocationChange: true })
      .then(() => {
        this.router.navigate([currentRoute]);
      });
  }

  navigateToHome() {
    this.router.navigate([`/${HomeRoute.path}`]);
  }

  changeLanguage(language: string) {
    if (this.t.getActiveLang() === language) return;

    this.languageSubscription?.unsubscribe();
    this.languageSubscription = this.t
      .load(language)
      .pipe(take(1))
      .subscribe(() => {
        localStorage.setItem(LocalStorageKeys.LANGUAGE, language);
        this.t.setActiveLang(language);
        this.reloadPage();
      });
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
    this.darkModeSubscription.unsubscribe();
  }
}
