import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StarRailComponent } from './star-rail.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

@NgModule({
  declarations: [StarRailComponent],
  imports: [CommonModule, AppMaterialModule]
})
export class StarRailModule {}
