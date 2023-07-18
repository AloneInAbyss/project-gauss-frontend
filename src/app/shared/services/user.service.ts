import { Injectable } from '@angular/core';
import { AvailableLanguages } from './available-languages-enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserLanguage(): string {
    const currentLang = localStorage.getItem('language') ?? '';
    const isLangAvailable = Object.values(AvailableLanguages).some(
      (availableLang) => availableLang === currentLang
    );
    return isLangAvailable ? currentLang : AvailableLanguages.PT;
  }

  setUserLanguage(language: string) {
    localStorage.setItem('language', language);
  }
}
