import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ListModule } from '../list/list.module';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, ListModule, ChatModule],
})
export class CoreModule { }
