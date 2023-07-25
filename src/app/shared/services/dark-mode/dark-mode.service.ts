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
    return localStorage.getItem(LocalStorageKeys.DARK_MODE) === 'true';
  }

  getDarkModeObservable(): Observable<boolean> {
    return this._darkMode.asObservable();
  }

  toggleDarkMode() {
    const currentStatus = this.getStoredDarkMode();
    const nextStatus = !currentStatus;

    localStorage.setItem(LocalStorageKeys.DARK_MODE, nextStatus.toString());
    this._darkMode.next(nextStatus);
  }
}
