import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListHomeComponent } from './component/list-home/list-home.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ListRoutingModule, ListHomeComponent],
  exports: [ListHomeComponent],
})
export class ListModule { }
