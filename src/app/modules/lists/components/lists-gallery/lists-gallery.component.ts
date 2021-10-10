import { Component, OnInit } from '@angular/core';
import { ListsQuery } from '../../store/lists.query';
import { ListsService } from '../../store/lists.service';
import { List } from '../../store/list.model';
import { MatDialog } from '@angular/material/dialog';
import { ListFormComponent } from '../list-form/list-form.component';
import { UnsplashQuery } from '../../../../shared/unsplash/unsplash.query';
import { UnsplashService } from '../../../../shared/unsplash/unsplash.service';
import { Unsplash } from '../../../../shared/unsplash/unsplash.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-lists-gallery',
  templateUrl: './lists-gallery.component.html',
  styleUrls: ['./lists-gallery.component.scss'],
})
export class ListsGalleryComponent implements OnInit {
  lists: List[] = [];

  constructor(
    private listsQuery: ListsQuery,
    private listsService: ListsService,
    private unsplashQuery: UnsplashQuery,
    private unsplashService: UnsplashService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.listsQuery.getHasCache()) {
      this.listsService.get<List[]>().subscribe();
    }

    this.listsQuery.selectAll().subscribe((lists) => {
      this.lists = lists.map((list) => new List(list));
    });
  }

  openConfigureListDialog() {
    const dialogRef = this.dialog.open(ListFormComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const url = `${environment.unsplashApi}/photos/random?orientation=landscape&query=${result.data.title}+nature`;
        this.unsplashService.get<Unsplash>('', { url }).subscribe((image) => {
          const list = new List({
            title: result.data.title,
            items: [],
            coverImage: image.urls.regular,
          });
          this.listsService.add(list).subscribe();
        });
      }
    });
  }

  openSettings(list: List) {}

  removeList(list: List) {
    this.listsService.delete(list.id).subscribe((r) => console.log(r));
  }

  getUnsplashImage() {}
}
