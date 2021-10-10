import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsGalleryComponent } from './components/lists-gallery/lists-gallery.component';
import { SharedModule } from '../../shared/shared.module';
import { ListsGalleryItemComponent } from './components/lists-gallery-item/lists-gallery-item.component';
import { ListFormComponent } from './components/list-form/list-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListDetailsComponent } from './components/list-details/list-details.component';

@NgModule({
  declarations: [
    ListsGalleryComponent,
    ListsGalleryItemComponent,
    ListFormComponent,
    ListDetailsComponent,
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ListsModule {}
