import {AppRoutingModule} from '../../node_modules/@angular/cli/blueprints/ng/files/__path__/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookModule } from './book/book.module'
import { AppComponent } from './app.component';
import { UtilitiesModule } from './utilities/utilities.module';
import { BookService } from './core/book.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { BookRoutingModule } from "app/book/book.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
