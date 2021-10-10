import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UnsplashStore } from './unsplash.store';
import { UnsplashState } from './unsplash.model';

@Injectable({ providedIn: 'root' })
export class UnsplashQuery extends QueryEntity<UnsplashState> {
  constructor(protected store: UnsplashStore) {
    super(store);
  }
}
