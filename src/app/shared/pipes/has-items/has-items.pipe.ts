import { Pipe, PipeTransform } from '@angular/core';
import { AppCategory } from '../../../modules/list-items/store/categories/category.model';

@Pipe({
  name: 'hasItems',
})
export class HasItemsPipe implements PipeTransform {
  transform(categories: AppCategory[]): boolean {
    const hasItems: boolean[] = [];
    categories.forEach((category) => {
      hasItems.push(category.listItems.length > 0);
    });
    return hasItems.findIndex((item) => item) > -1;
  }
}
