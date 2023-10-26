import { Injectable } from '@angular/core';
import { getBrowserLang } from '@ngneat/transloco';
import { AvailableLanguages } from '../../models/available-languages-enum';
import { LocalStorageKeys } from '../../models/local-storage-keys-enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getBrowserLang = getBrowserLang;
  
  getUserLanguage(): string {
    const currentLang =
      localStorage.getItem(LocalStorageKeys.LANGUAGE) ?? this.getBrowserLang() ?? '';
    const isLangAvailable = Object.values(AvailableLanguages).some(
      (availableLang) => availableLang === currentLang
    );
    return isLangAvailable ? currentLang : AvailableLanguages.PT;
  }

  setUserLanguage(language: string) {
    localStorage.setItem(LocalStorageKeys.LANGUAGE, language);
  }
}
