import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRailRoutingModule } from './star-rail-routing.module';
import { StarRailComponent } from './star-rail.component';


@NgModule({
  declarations: [
    StarRailComponent
  ],
  imports: [
    CommonModule,
    StarRailRoutingModule
  ]
})
export class StarRailModule { }
