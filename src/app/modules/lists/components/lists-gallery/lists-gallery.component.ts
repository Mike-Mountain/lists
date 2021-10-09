import { Component, OnInit } from '@angular/core';
import { ListsQuery } from '../../store/lists.query';
import { ListsService } from '../../store/lists.service';
import { List } from '../../store/list.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lists-gallery',
  templateUrl: './lists-gallery.component.html',
  styleUrls: ['./lists-gallery.component.scss'],
})
export class ListsGalleryComponent implements OnInit {
  lists$: Observable<List[]> | undefined;

  constructor(
    private listsQuery: ListsQuery,
    private listsService: ListsService
  ) {}

  ngOnInit(): void {
    if (!this.listsQuery.getHasCache()) {
      this.lists$ = this.listsService.get<List[]>();
    } else {
      this.lists$ = this.listsQuery.selectAll();
    }
  }
}
