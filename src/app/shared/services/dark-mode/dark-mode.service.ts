import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LocalStorageKeys } from '../../models/local-storage-keys-enum';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private _darkMode = new Subject<boolean>();

  constructor() {
    this.initializeDarkMode();
  }

  private initializeDarkMode() {
    const initialStatus = this.getCurrentDarkModePreference();
    this._darkMode.next(initialStatus);
  }

  private isDarkModePreferedByUser(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private getStoredDarkMode(): string | null {
    return localStorage.getItem(LocalStorageKeys.DARK_MODE);
  }

  private setStoredDarkMode(value: string) {
    localStorage.setItem(LocalStorageKeys.DARK_MODE, value);
  }

  getCurrentDarkModePreference(): boolean {
    const storedDarkMode = this.getStoredDarkMode();

    if (storedDarkMode !== 'false' && storedDarkMode !== 'true') {
      return this.isDarkModePreferedByUser();
    }

    return storedDarkMode === 'true';
  }

  getDarkModeObservable(): Observable<boolean> {
    return this._darkMode.asObservable();
  }

  toggleDarkMode() {
    const currentStatus = this.getCurrentDarkModePreference();
    const nextStatus = !currentStatus;

    this.setStoredDarkMode(nextStatus.toString());
    this._darkMode.next(nextStatus);
  }
}
