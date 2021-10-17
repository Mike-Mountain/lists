import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../../../modules/list-items/store/categories/category.model';

@Pipe({
  name: 'hasItems',
})
export class HasItemsPipe implements PipeTransform {
  transform(categories: Category[]): boolean {
    console.log('HasItems?');
    const hasItems: boolean[] = [];
    categories.forEach((category) => {
      hasItems.push(category.list_items.length > 0);
    });
    return hasItems.findIndex((category) => category) > 0;
  }
}
