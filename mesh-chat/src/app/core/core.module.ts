import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, MatGridListModule],
})
export class CoreModule {}
