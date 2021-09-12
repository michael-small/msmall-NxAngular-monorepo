import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '@msmall-angular-monorepo/header';
import { SidenavModule } from '@msmall-angular-monorepo/sidenav';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    SidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
