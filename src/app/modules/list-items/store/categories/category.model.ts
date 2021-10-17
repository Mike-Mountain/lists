import { BaseModel } from '../../../../shared/models/base.model';
import { ListItem } from '../list-items/list-item.model';

export class Category extends BaseModel {
  title: string;
  image: string;
  list_items: ListItem[];

  constructor(params: Partial<Category>) {
    super(params);
    this.title = params?.title || '';
    this.image = params?.image || '';
    this.list_items =
      params?.list_items?.map((item) => new ListItem(item)) || [];
  }
}
