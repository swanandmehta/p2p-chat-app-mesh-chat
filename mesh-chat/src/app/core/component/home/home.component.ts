import { Component } from '@angular/core';
import { ListHomeComponent } from '../../../list/component/list-home/list-home.component';
import { ChatHomeComponent } from '../../../chat/compoennt/chat-home/chat-home.component';

@Component({
  selector: 'app-home',
  imports: [ListHomeComponent, ChatHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent { }
