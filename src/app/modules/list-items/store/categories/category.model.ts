import { BaseModel } from '../../../../shared/models/base.model';
import { ListItem } from '../list-items/list-item.model';

export class AppCategory {
  category: Category;
  listItems: ListItem[];

  constructor(params: Partial<AppCategory>) {
    this.category = new Category(params.category || {});
    this.listItems =
      params.listItems?.map((item) => new ListItem(item || {})) || [];
  }
}

export class Category extends BaseModel {
  title: string;
  image: string;

  constructor(params: Partial<Category>) {
    super(params);
    this.title = params?.title || '';
    this.image = params?.image || '';
  }
}
