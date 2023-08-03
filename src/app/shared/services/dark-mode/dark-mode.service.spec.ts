import { TestBed } from '@angular/core/testing';

import { DarkModeService } from './dark-mode.service';
import { LocalStorageKeys } from '../../models/local-storage-keys-enum';

const mockMatchMedia = {
  matches: true,
  media: '',
  dispatchEvent: () => false,
  addEventListener: () => {},
  removeEventListener: () => {},
  onchange: () => {},
  addListener: () => {},
  removeListener: () => {}
};

describe('DarkModeService', () => {
  let service: DarkModeService;

  let spyWindowMatchMedia: jasmine.Spy;

  let storage: {
    [key: string]: string;
  } = {};

  const mockLocalStorage = {
    getItem: (key: string): string | null => {
      return key in storage ? storage[key] : null;
    },
    setItem: (key: string, value: string) => {
      storage[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete storage[key];
    },
    clear: () => {
      storage = {};
    }
  };

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

    spyWindowMatchMedia = spyOn(window, 'matchMedia').and.returnValue({
      ...mockMatchMedia,
      matches: false
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkModeService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created with dark theme disabled by windows matchMedia', () => {
    expect(service.getCurrentDarkModePreference()).toBeFalse();
  });

  it('should be created with dark theme enabled by windows matchMedia', () => {
    spyWindowMatchMedia.and.returnValue({
      ...mockMatchMedia,
      matches: true
    });

    expect(service.getCurrentDarkModePreference()).toBeTrue();
  });

  it('should be created with dark theme disabled by localStorage', () => {
    localStorage.setItem(LocalStorageKeys.DARK_MODE, 'false');

    spyWindowMatchMedia.and.returnValue({
      ...mockMatchMedia,
      matches: true
    });

    expect(service.getCurrentDarkModePreference()).toBeFalse();
  });

  it('should be created with dark theme enabled by localStorage', () => {
    localStorage.setItem(LocalStorageKeys.DARK_MODE, 'true');

    expect(service.getCurrentDarkModePreference()).toBeTrue();
  });

  it('should toggle the dark theme from enabled to disabled', () => {
    localStorage.setItem(LocalStorageKeys.DARK_MODE, 'true');

    service.toggleDarkMode();

    expect(service.getCurrentDarkModePreference()).toBeFalse();
  });
});
