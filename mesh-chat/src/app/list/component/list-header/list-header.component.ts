import { Component } from '@angular/core';
import { ListHeaderSearchComponent } from '../list-header-search/list-header-search.component';
import { ListHeaderFilterComponent } from '../list-header-filter/list-header-filter.component';

@Component({
  selector: 'app-list-header',
  imports: [ListHeaderSearchComponent, ListHeaderFilterComponent],
  templateUrl: './list-header.component.html',
  styleUrl: './list-header.component.scss',
})
export class ListHeaderComponent { }
