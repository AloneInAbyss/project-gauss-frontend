import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

import { StarRailComponent } from './star-rail.component';

@NgModule({
  declarations: [StarRailComponent],
  imports: [CommonModule, SharedComponentsModule]
})
export class StarRailModule {}
