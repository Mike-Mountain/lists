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
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.listsQuery.selectEntity(params.listId).subscribe((list) => {
        this.list = new List(list as List);
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
