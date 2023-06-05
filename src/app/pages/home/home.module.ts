import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AppMaterialModule]
})
export class HomeModule {}
