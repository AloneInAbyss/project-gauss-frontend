import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../modules/app-material.module';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { NavigationCardsComponent } from './navigation-cards/navigation-cards.component';
import { ErrorRetryDialogComponent } from './error-retry-dialog/error-retry-dialog.component';

@NgModule({
  declarations: [
    NavigationCardsComponent,
    ErrorDialogComponent,
    ErrorRetryDialogComponent
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [NavigationCardsComponent, ErrorDialogComponent]
})
export class SharedComponentsModule {}
