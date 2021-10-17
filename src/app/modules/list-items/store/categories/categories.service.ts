import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { CategoriesStore, CategoriesState } from './categories.store';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends NgEntityService<CategoriesState> {

  constructor(protected store: CategoriesStore) {
    super(store);
  }

}
