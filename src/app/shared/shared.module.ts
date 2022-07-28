import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/theme/header/header.component';
import { FooterComponent } from './components/theme/footer/footer.component';
import { NavComponent } from './components/theme/nav/nav.component';
import { AsideComponent } from './components/theme/aside/aside.component';
import { SearchBarComponent } from './components/includes/search-bar/search-bar.component';
import { AvatarUserComponent } from './components/includes/avatar-user/avatar-user.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    NavComponent,
    AvatarUserComponent,
    AsideComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    NavComponent,
    AvatarUserComponent,
    AsideComponent,
    FooterComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
