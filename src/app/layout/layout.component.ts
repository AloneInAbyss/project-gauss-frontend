import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Observable, Subscription, startWith, take } from 'rxjs';
import { DummyRoute } from '../routes/routes';
import { AvailableLanguages } from '../shared/models/available-languages-enum';
import { LocalStorageKeys } from '../shared/models/local-storage-keys-enum';
import { DarkModeService } from '../shared/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent implements OnInit, OnDestroy {
  availableLanguages = AvailableLanguages;
  darkMode$: Observable<boolean> = this.darkModeService
    .getDarkModeObservable()
    .pipe(startWith(this.darkModeService.getStoredDarkMode()));

  languageSubscription?: Subscription;
  darkModeSubscription?: Subscription;

  constructor(
    private router: Router,
    private t: TranslocoService,
    public darkModeService: DarkModeService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.darkModeSubscription = this.darkMode$.subscribe((isDarkMode) => {
      !isDarkMode
        ? this.renderer.addClass(document.body, 'light-mode')
        : this.renderer.removeClass(document.body, 'light-mode');
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
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

  reloadPage() {
    const currentRoute = this.router.url;
    this.router
      .navigateByUrl(DummyRoute.path, { skipLocationChange: true })
      .then(() => {
        this.router.navigate([currentRoute]);
      });
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
    this.darkModeSubscription?.unsubscribe();
  }
}
