import { HomeRoutingModule } from './home.routing.module';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
