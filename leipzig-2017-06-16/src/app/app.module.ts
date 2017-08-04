import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookModule } from './book/book.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { AppComponent } from './app.component';
// import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    // BookEditComponent
  ],
  imports: [
    BrowserModule,

    BookModule,

    AppRoutingModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
