import { Component, Input, OnInit } from '@angular/core';
import { List, ListItem } from '../../store/list.model';

@Component({
  selector: 'app-lists-gallery-item',
  templateUrl: './lists-gallery-item.component.html',
  styleUrls: ['./lists-gallery-item.component.scss'],
})
export class ListsGalleryItemComponent implements OnInit {
  @Input() list: List | undefined;

  truncatedListItems: ListItem[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.list) {
      this.truncatedListItems = this.list.items.filter(
        (item, index) => index <= 1
      );
    }
  }
}
