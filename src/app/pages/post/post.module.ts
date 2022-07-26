import { PostRoutingModule } from './post.routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';



@NgModule({
  declarations: [
    IndexComponent,
    ShowComponent
  ],
  imports: [
    PostRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class PostModule { }
