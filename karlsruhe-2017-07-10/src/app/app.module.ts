import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookModule } from './book/book.module'
import { AppComponent } from './app.component';
import { UtilitiesModule } from './utilities/utilities.module';
import { BookService } from './core/book.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  exports: [UtilitiesModule]
})
export class AppModule { }
