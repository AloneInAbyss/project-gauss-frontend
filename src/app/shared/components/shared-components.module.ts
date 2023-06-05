import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCardsComponent } from './navigation-cards/navigation-cards.component';
import { AppMaterialModule } from '../modules/app-material.module';

@NgModule({
  declarations: [NavigationCardsComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [NavigationCardsComponent]
})
export class SharedComponentsModule {}
