import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ListsQuery } from '../../store/lists.query';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../store/list.model';
import { MatToolbar } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { ListsService } from '../../store/lists.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
})
export class ListDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('toolbar') toolbar: any;

  list: List | undefined;

  constructor(
    private listsQuery: ListsQuery,
    private listService: ListsService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let list$: Observable<List | undefined>;
      if (this.listsQuery.getHasCache()) {
        list$ = this.listsQuery.selectEntity(params.listId);
      } else {
        list$ = this.listService.get<List>(params.listId);
      }
      list$.subscribe((list) => {
        if (list) {
          this.list = new List(list as List);
        }
      });
    });
  }

  ngAfterViewInit() {
    if (this.toolbar) {
      this.renderer.setStyle(
        this.toolbar.nativeElement,
        'background-image',
        `${this.list?.coverImage} center cover`
      );
    }
  }
}
