import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ListItem } from './list-item.model';

export interface ListItemsState extends EntityState<ListItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'list-items' })
export class ListItemsStore extends EntityStore<ListItemsState> {
  constructor() {
    super();
  }
}
