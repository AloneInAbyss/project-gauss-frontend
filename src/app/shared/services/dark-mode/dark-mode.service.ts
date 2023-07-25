import { Injectable, OnInit } from '@angular/core';
import { LocalStorageKeys } from '../../models/local-storage-keys-enum';
import { Observable, Subject, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private _darkMode = new Subject<boolean>();

  constructor() {
    const initialStatus = this.getStoredDarkMode();
    this._darkMode.next(initialStatus);
  }

  getStoredDarkMode(): boolean {
    const localStorageItem = localStorage.getItem(LocalStorageKeys.DARK_MODE);
    if (localStorageItem !== 'false' && localStorageItem !== 'true') {
      this.setStoredDarkMode('true');
      return true;
    }

    return localStorage.getItem(LocalStorageKeys.DARK_MODE) === 'true';
  }

  setStoredDarkMode(value: string) {
    localStorage.setItem(LocalStorageKeys.DARK_MODE, value);
  }

  getDarkModeObservable(): Observable<boolean> {
    return this._darkMode.asObservable();
  }

  toggleDarkMode() {
    const currentStatus = this.getStoredDarkMode();
    const nextStatus = !currentStatus;

    this.setStoredDarkMode(nextStatus.toString());
    this._darkMode.next(nextStatus);
  }
}
