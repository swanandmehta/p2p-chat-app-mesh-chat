import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-header-search',
  imports: [MatInputModule, MatIconModule],
  templateUrl: './list-header-search.component.html',
  styleUrl: './list-header-search.component.scss',
})
export class ListHeaderSearchComponent { }
