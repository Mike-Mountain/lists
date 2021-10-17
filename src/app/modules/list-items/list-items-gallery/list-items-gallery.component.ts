import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../store/list-items/list-items.service';
import { ListItemsQuery } from '../store/list-items/list-items.query';
import { ListItem } from '../store/list-items/list-item.model';
import { MatDialog } from '@angular/material/dialog';
import { ListItemFormComponent } from '../list-item-form/list-item-form.component';
import { CategoriesService } from '../store/categories/categories.service';
import { CategoriesQuery } from '../store/categories/categories.query';
import { Category } from '../store/categories/category.model';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-list-items-gallery',
  templateUrl: './list-items-gallery.component.html',
  styleUrls: ['./list-items-gallery.component.scss'],
})
export class ListItemsGalleryComponent implements OnInit {
  listItems: ListItem[] = [];
  categories: Category[] = [];

  constructor(
    private listItemsService: ListItemsService,
    private listItemsQuery: ListItemsQuery,
    private categoriesService: CategoriesService,
    private categoriesQuery: CategoriesQuery,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.categoriesQuery.getHasCache()) {
      this.categoriesService.get<Category[]>().subscribe();
    }
    if (!this.listItemsQuery.getHasCache()) {
      this.listItemsService.get<ListItem[]>().subscribe();
    }
    this.categoriesQuery.selectAll().subscribe((categories) => {
      console.log(categories);
      this.categories = categories.map((category) => new Category(category));
    });
    this.listItemsQuery.selectAll().subscribe((listItems) => {
      console.log(listItems);
      this.listItems = listItems.map((listItems) => new ListItem(listItems));
    });
  }

  openConfigureCategoryDialog() {
    const data = {
      listItems: this.listItems,
    };
    console.log(data);
    const dialogRef = this.dialog.open(CategoryFormComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.categoriesService.add<Category>(result.data).subscribe();
      }
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
        // TODO: Move this into a service
        const listItem = new ListItem(result.data);
        this.listItemsService.add<ListItem>(listItem).subscribe((item) => {
          listItem.categories.forEach((listItemCat) => {
            const category: Category | undefined = this.categories.find(
              (cat) => cat.id === listItemCat.id
            );
            if (category) {
              category.list_items.push(listItem);
            }
          });
        });
      }
    });
  }

  deleteListItem(item: ListItem) {
    console.log('Deleting');
    this.listItemsService.delete<ListItem>(item.id).subscribe(() => {
      this.categories.forEach((category) => {
        category.list_items = category.list_items.filter(
          (listItem) => listItem.id !== item.id
        );
      });
    });
  }
}
