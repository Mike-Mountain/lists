import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItem } from '../store/list-items/list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() listItem: ListItem | undefined;
  @Output() edit = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<boolean>();
  showActions = false;

  constructor() {}

  ngOnInit(): void {}

  editItem(event: MouseEvent) {
    this.edit.emit();
    event.stopImmediatePropagation();
  }

  deleteItem() {
    this.delete.emit();
  }
}
