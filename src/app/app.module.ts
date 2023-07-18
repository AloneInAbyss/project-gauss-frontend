import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppMaterialModule } from './shared/modules/app-material.module';
import { TranslocoRootModule } from './transloco-root.module';
import { TranslocoService } from '@ngneat/transloco';
import { UserService } from './shared/services/user.service';
import { lastValueFrom } from 'rxjs';

export function preloadUser(
  userService: UserService,
  transloco: TranslocoService
) {
  return function () {
    const language = userService.getUserLanguage();
    transloco.setActiveLang(language);
    return lastValueFrom(transloco.load(language));
  };
}

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,

    // Project
    AppMaterialModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: preloadUser,
      deps: [UserService, TranslocoService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
