import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemsRoutingModule } from './list-items-routing.module';
import { ListItemsGalleryComponent } from './list-items-gallery/list-items-gallery.component';
import { SharedModule } from '../../shared/shared.module';
import { ListItemFormComponent } from './list-item-form/list-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListItemComponent } from './list-item/list-item.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [ListItemsGalleryComponent, ListItemFormComponent, ListItemComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    ListItemsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ListItemsModule {}
