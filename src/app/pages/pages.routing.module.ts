import { PostModule } from './post/post.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const PagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./home/home.module')
        .then(m => m.HomeModule)
      }
    ],
  },
  {
    path: "post",
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./post/post.module')
        .then(m => m.PostModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
