import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { ListItemsStore, ListItemsState } from './list-items.store';

@Injectable({ providedIn: 'root' })
export class ListItemsService extends NgEntityService<ListItemsState> {
  constructor(protected store: ListItemsStore) {
    super(store);
  }
}
