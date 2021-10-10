import { Injectable } from '@angular/core';
import {
  NgEntityService,
  NgEntityServiceConfig,
} from '@datorama/akita-ng-entity-service';
import { UnsplashStore } from './unsplash.store';
import { UnsplashState } from './unsplash.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
@NgEntityServiceConfig({ baseUrl: environment.unsplashApi })
export class UnsplashService extends NgEntityService<UnsplashState> {
  constructor(protected store: UnsplashStore) {
    super(store);
  }
}
