import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsGalleryComponent } from './components/lists-gallery/lists-gallery.component';
import { SharedModule } from '../../shared/shared.module';
import { ListsGalleryItemComponent } from './components/lists-gallery-item/lists-gallery-item.component';

@NgModule({
  declarations: [ListsGalleryComponent, ListsGalleryItemComponent],
  imports: [CommonModule, ListsRoutingModule, SharedModule],
})
export class ListsModule {}
