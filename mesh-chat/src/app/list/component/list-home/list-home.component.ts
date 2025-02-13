import { Component } from '@angular/core';
import { ListHeaderComponent } from '../list-header/list-header.component';
import { ListBodyComponent } from '../list-body/list-body.component';

@Component({
  selector: 'app-list-home',
  imports: [ListHeaderComponent, ListBodyComponent],
  templateUrl: './list-home.component.html',
  styleUrl: './list-home.component.scss',
})
export class ListHomeComponent { }
