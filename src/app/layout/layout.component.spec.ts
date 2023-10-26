import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { Subscription } from 'rxjs';
import { AppModule } from '../app.module';
import { LocalStorageMock } from '../shared/mocks/local-storage-mock';
import { MatchMediaMock } from '../shared/mocks/match-media-mock';
import { LocalStorageKeys } from '../shared/models/local-storage-keys-enum';
import { getTranslocoModule } from '../shared/modules/transloco-testing.module';
import { UserService } from '../shared/services/user/user.service';
import { LayoutComponent } from './layout.component';
import { TranslocoService } from '@ngneat/transloco';
import { RouterTestingModule } from '@angular/router/testing';
import { DarkModeService } from '../shared/services/dark-mode/dark-mode.service';
import { AvailableLanguages } from '../shared/models/available-languages-enum';
import { DummyRoute, HomeRoute, StarRailRoute } from '../routes/routes';
import { Router } from '@angular/router';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  let router: Router;
  let darkModeService: DarkModeService;
  let t: TranslocoService;

  let darkModeSubscription: Subscription;

  let spyWindowMatchMedia: jasmine.Spy;

  const mockLocalStorage = LocalStorageMock;
  const mockMatchMedia = MatchMediaMock;

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

    spyWindowMatchMedia = spyOn(window, 'matchMedia').and.returnValue({
      ...mockMatchMedia,
      matches: false
    });

    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule, getTranslocoModule()],
      providers: [Router, UserService, DarkModeService],
      declarations: [LayoutComponent]
    });

    router = TestBed.inject(Router);
    darkModeService = TestBed.inject(DarkModeService);
    t = TestBed.inject(TranslocoService);

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(darkModeService, 'toggleDarkMode').and.callThrough();
    spyOn(t, 'load').and.callThrough();
    spyOn(router, 'navigate').and.stub();
    spyOn(router, 'navigateByUrl').and.callThrough();
  });

  afterEach(() => {
    localStorage.clear();
    darkModeSubscription?.unsubscribe();
  });

  it('should create', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;

    const logoButton = nativeElement.querySelector(
      'mat-toolbar > button'
    ) as HTMLButtonElement;

    expect(logoButton.textContent).toBe('Project Gauss');
  });

  it('should toggle dark mode preference from light to dark', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;
    const darkModeChangesSequence: Array<boolean> = [];

    darkModeSubscription = component.darkMode$.subscribe((isDarkMode) => {
      darkModeChangesSequence.push(isDarkMode);
    });

    const darkModeTogglerButton = nativeElement.querySelector(
      '#dark-mode-toggler-button'
    ) as HTMLButtonElement;

    darkModeTogglerButton.click();

    expect(darkModeService.toggleDarkMode).toHaveBeenCalled();
    expect(localStorage.getItem(LocalStorageKeys.DARK_MODE)).toBe('true');
    expect(darkModeChangesSequence).toEqual([false, true]);
  });

  it('should navigate to homepage', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;

    const logoButton = nativeElement.querySelector(
      'mat-toolbar > button'
    ) as HTMLButtonElement;

    logoButton.click();

    expect(router.navigate).toHaveBeenCalledWith([`/${HomeRoute.path}`]);
  });

  it('should change language and reload page', fakeAsync(() => {
    fixture.ngZone?.run(() => {
      component.changeLanguage(AvailableLanguages.PT);
      tick();
    });

    expect(t.load).toHaveBeenCalledWith(AvailableLanguages.PT);
    expect(router.navigateByUrl).toHaveBeenCalledWith(`/${DummyRoute.path}`, {
      skipLocationChange: true
    });
  }));

  it('should navigate to /star-rail route', fakeAsync(() => {
    router.navigateByUrl(`/${StarRailRoute.path}`, {
      skipLocationChange: true
    });
    tick();
    expect(router.url).toBe(`/${StarRailRoute.path}`);
  }));

  it('should not change language if it is already the same', () => {
    fixture.ngZone?.run(() => {
      component.changeLanguage(AvailableLanguages.EN);
    });

    expect(t.load).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should change language and reload from dummy route', fakeAsync(() => {
    spyOnProperty(router, 'url', 'get').and.returnValue(`/${DummyRoute.path}`);

    fixture.ngZone?.run(() => {
      component.changeLanguage(AvailableLanguages.PT);
      tick();
    });

    expect(router.navigateByUrl).toHaveBeenCalledWith(`/${HomeRoute.path}`, {
      skipLocationChange: true
    });
  }));
});
