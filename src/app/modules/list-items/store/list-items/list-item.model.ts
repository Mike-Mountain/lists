import { BaseModel } from '../../../../shared/models/base.model';
import { Category } from '../categories/category.model';
import { List } from '../../../lists/store/list.model';

export class ListItem extends BaseModel {
  title: string;
  isComplete: boolean;
  notes: string;
  image: string;
  lists: List[];
  category: Category;

  constructor(params: Partial<ListItem>) {
    super(params);
    this.title = params.title || '';
    this.isComplete = params.isComplete || false;
    this.notes = params.notes || '';
    this.image = params.image || '';
    this.lists = params.lists?.map((list) => new List(list)) || [];
    this.category = new Category(params?.category || {});
  }
}
