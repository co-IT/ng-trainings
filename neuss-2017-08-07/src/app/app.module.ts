import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from 'clarity-angular';

import { BookModule } from './book/book.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    // Feature Modules
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
