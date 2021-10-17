import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ListItemsStore, ListItemsState } from './list-items.store';

@Injectable({ providedIn: 'root' })
export class ListItemsQuery extends QueryEntity<ListItemsState> {

  constructor(protected store: ListItemsStore) {
    super(store);
  }

}
