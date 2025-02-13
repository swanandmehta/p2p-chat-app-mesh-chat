import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatHomeComponent } from './compoennt/chat-home/chat-home.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ChatRoutingModule, ChatHomeComponent],
  exports: [ChatHomeComponent],
})
export class ChatModule { }
