import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { UnsplashState } from './unsplash.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'photos/random' })
export class UnsplashStore extends EntityStore<UnsplashState> {
  constructor() {
    super();
  }
}
