import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from '../../store/list.model';

@Component({
  selector: 'app-lists-gallery-item',
  templateUrl: './lists-gallery-item.component.html',
  styleUrls: ['./lists-gallery-item.component.scss'],
})
export class ListsGalleryItemComponent implements OnInit {
  @Input() list: List | undefined;
  @Output() openSettings = new EventEmitter<List>();
  @Output() removeItem = new EventEmitter<List>();

  showActions = false;

  constructor() {}

  ngOnInit(): void {}

  routeToSettings() {
    this.openSettings.emit(this.list);
  }

  removeList() {
    this.removeItem.emit(this.list);
  }
}
