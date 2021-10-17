import { BaseModel } from '../../../shared/models/base.model';
import { ListItem } from '../../list-items/store/list-items/list-item.model';

export class List extends BaseModel {
  title: string;
  items: ListItem[];
  coverImage: string;

  constructor(params: Partial<List>) {
    super(params);
    this.title = params?.title || '';
    this.items = params?.items?.map((item) => new ListItem(item)) || [];
    this.coverImage = params.coverImage || '';
  }
}
