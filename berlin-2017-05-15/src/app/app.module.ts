import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookModule } from './book/book.module';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
