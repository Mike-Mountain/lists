import { BaseModel } from '../../../shared/models/base.model';

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

export class ListItem extends BaseModel {
  title: string;
  isComplete: boolean;
  notes: string;

  constructor(params: Partial<ListItem>) {
    super(params);
    this.title = params?.title || '';
    this.isComplete = params?.isComplete || false;
    this.notes = params?.notes || '';
  }
}
