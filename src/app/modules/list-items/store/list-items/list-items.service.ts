import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { ListItemsStore, ListItemsState } from './list-items.store';
import { ListItem } from './list-item.model';
import { AppCategory } from '../categories/category.model';
import { removeAppCategoryDuplicates } from '../../../../shared/helpers/remove-duplicates.helper';

@Injectable({ providedIn: 'root' })
export class ListItemsService extends NgEntityService<ListItemsState> {
  constructor(protected store: ListItemsStore) {
    super(store);
  }

  sortItemsByCategory(items: ListItem[]): AppCategory[] {
    const categories: AppCategory[] = [];
    const categoryItems = items.filter((item) => item.category);
    categoryItems.forEach((item) => {
      categories.push({
        category: item.category,
        listItems: categoryItems.filter(
          (categoryItem) => categoryItem.category.id === item.category.id
        ),
      });
    });
    return removeAppCategoryDuplicates(categories);
  }
}
