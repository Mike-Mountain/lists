import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../window/window.provider';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private sessionStorage: Storage;

  constructor(@Inject(WINDOW) public window: Window) {
    this.sessionStorage = window.sessionStorage;
  }

  setItem(key: string, item: string): void {
    this.sessionStorage.setItem(key, item);
  }

  getItem(key: string): string | null {
    return this.sessionStorage.getItem(key);
  }

  removeItem(key: string): void {
    this.sessionStorage.removeItem(key);
  }

  clearStorage(): void {
    this.sessionStorage.clear();
  }

  hasItems(): boolean {
    return this.sessionStorage.length > 0;
  }
}
