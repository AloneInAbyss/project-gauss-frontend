import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { AvailableLanguages } from '../../models/available-languages-enum';
import { LocalStorageKeys } from '../../models/local-storage-keys-enum';
import { LocalStorageMock } from '../../mocks/local-storage-mock';

describe('UserService', () => {
  let service: UserService;

  const mockLocalStorage = LocalStorageMock;

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created with default language as EN from browser default', () => {
    expect(service.getUserLanguage()).toBe(AvailableLanguages.EN);
  });

  it('should be created with default language as PT from localStorage', () => {
    localStorage.setItem(LocalStorageKeys.LANGUAGE, AvailableLanguages.PT);
    expect(service.getUserLanguage()).toBe(AvailableLanguages.PT);
  });

  it('should be created with default language as PT when found incompatible localStorage value', () => {
    localStorage.setItem(LocalStorageKeys.LANGUAGE, 'UNKNOWN');
    expect(service.getUserLanguage()).toBe(AvailableLanguages.PT);
  });

  it('should set user language as PT', () => {
    service.setUserLanguage(AvailableLanguages.EN)
    expect(service.getUserLanguage()).toBe(AvailableLanguages.EN);
  });
});
