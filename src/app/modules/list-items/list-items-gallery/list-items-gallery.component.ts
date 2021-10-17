import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../store/list-items/list-items.service';
import { ListItemsQuery } from '../store/list-items/list-items.query';
import { ListItem } from '../store/list-items/list-item.model';
import { MatDialog } from '@angular/material/dialog';
import { ListItemFormComponent } from '../list-item-form/list-item-form.component';
import { AppCategory, Category } from '../store/categories/category.model';

@Component({
  selector: 'app-list-items-gallery',
  templateUrl: './list-items-gallery.component.html',
  styleUrls: ['./list-items-gallery.component.scss'],
})
export class ListItemsGalleryComponent implements OnInit {
  listItems: ListItem[] = [];
  categories: AppCategory[] = [];

  constructor(
    private listItemsService: ListItemsService,
    private listItemsQuery: ListItemsQuery,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.listItemsQuery.getHasCache()) {
      this.listItemsService.get<ListItem[]>().subscribe();
    }
    this.listItemsQuery.selectAll().subscribe((listItems) => {
      this.listItems = listItems.map((listItems) => new ListItem(listItems));
      this.categories = this.listItemsService.sortItemsByCategory(
        this.listItems
      );
    });
  }

  openConfigureItemDialog(item?: ListItem) {
    const data = {
      categories: this.categories,
      item,
    };
    const dialogRef = this.dialog.open(ListItemFormComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.data?.category?.listItems?.forEach(
          (listItem: ListItem) => (listItem.category = {} as Category)
        );
        this.listItemsService.add<ListItem>(result.data).subscribe();
      }
    });
  }

  deleteListItem(item: ListItem) {
    this.listItemsService.delete<ListItem>(item.id).subscribe();
  }
}
