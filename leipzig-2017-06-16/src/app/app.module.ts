import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookModule } from './book/book.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
