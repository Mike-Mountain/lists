import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsGalleryComponent } from './components/lists-gallery/lists-gallery.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';

const routes: Routes = [
  { path: 'list/:listId', component: ListDetailsComponent },
  { path: 'lists', component: ListsGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule {}
