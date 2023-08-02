import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../modules/app-material.module';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { NavigationCardsComponent } from './navigation-cards/navigation-cards.component';
import { ErrorRetryDialogComponent } from './error-retry-dialog/error-retry-dialog.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    NavigationCardsComponent,
    CustomDialogComponent,
    ErrorRetryDialogComponent
  ],
  imports: [CommonModule, AppMaterialModule, TranslocoModule],
  exports: [NavigationCardsComponent, CustomDialogComponent]
})
export class SharedComponentsModule {}
