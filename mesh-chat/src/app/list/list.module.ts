import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ListRoutingModule } from './list-routing.module';
import { ListHomeComponent } from './component/list-home/list-home.component';
import { ListHeaderSearchComponent } from './component/list-header-search/list-header-search.component';
import { ListHeaderFilterComponent } from './component/list-header-filter/list-header-filter.component';
import { ListHeaderComponent } from './component/list-header/list-header.component';
import { ListBodyComponent } from './component/list-body/list-body.component';
import { ListBodyChatComponent } from './component/list-body-chat/list-body-chat.component';
import { MatButton, MatIconButton } from '@angular/material/button';

@NgModule({
  declarations: [
    ListHomeComponent,
    ListHeaderComponent,
    ListHeaderSearchComponent,
    ListHeaderFilterComponent,
    ListBodyComponent,
    ListBodyChatComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatIconModule,
    MatInputModule,
    MatIconButton,
    MatButton,
  ],
  exports: [ListHomeComponent],
})
export class ListModule {}
