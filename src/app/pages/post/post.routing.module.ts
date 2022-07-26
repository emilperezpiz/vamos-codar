import { ShowComponent } from './show/show.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const PagesRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      params: { uriId: 'post_index' },
    },
  },
  {
    path: ':slug',
    component: ShowComponent,
    data: {
      params: { uriId: 'post_show' },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
