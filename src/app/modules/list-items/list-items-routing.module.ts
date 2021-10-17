import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsGalleryComponent } from './list-items-gallery/list-items-gallery.component';

const routes: Routes = [
  { path: 'gallery', component: ListItemsGalleryComponent },
  { path: '', pathMatch: 'full', redirectTo: 'gallery' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListItemsRoutingModule {}
