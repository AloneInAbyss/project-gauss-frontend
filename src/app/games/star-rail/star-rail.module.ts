import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { StarRailRoutingModule } from './star-rail-routing.module';
import { StarRailComponent } from './star-rail.component';


@NgModule({
  declarations: [
    StarRailComponent
  ],
  imports: [
    CommonModule,
    StarRailRoutingModule,
    MatCardModule
  ]
})
export class StarRailModule { }
