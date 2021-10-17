import { BaseModel } from '../models/base.model';
import { AppCategory } from '../../modules/list-items/store/categories/category.model';

export function removeDuplicates<T extends BaseModel>(items: T[]): T[] {
  return items.filter(
    (item, idx, self) => idx === self.findIndex((t) => t.id === item.id)
  );
}

export function removeAppCategoryDuplicates(
  items: AppCategory[]
): AppCategory[] {
  return items.filter(
    (item, idx, self) =>
      idx === self.findIndex((t) => t.category.id === item.category.id)
  );
}
