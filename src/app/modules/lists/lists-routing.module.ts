import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsGalleryComponent } from './components/lists-gallery/lists-gallery.component';

const routes: Routes = [{ path: '', component: ListsGalleryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule {}
