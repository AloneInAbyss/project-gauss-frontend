import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AppMaterialModule, SharedComponentsModule]
})
export class HomeModule {}
