import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { ListsStore, ListsState } from './lists.store';

@Injectable({ providedIn: 'root' })
export class ListsService extends NgEntityService<ListsState> {

  constructor(protected store: ListsStore) {
    super(store);
  }

}
