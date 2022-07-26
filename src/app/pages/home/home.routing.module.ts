import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const PagesRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      params: { uriId: 'home' },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
