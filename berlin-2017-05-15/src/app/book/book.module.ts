import { BookRoutingModule } from './book.routing.module';
import { GoogleBooksService } from './core/google-books.service';
import { HttpModule } from '@angular/http';
import { BookService } from './core/book.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesModule } from '../utilities/utilities.module';

import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { BookViewToggleComponent } from './book-view-toggle/book-view-toggle.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    UtilitiesModule,

    BookRoutingModule
  ],
  declarations: [
    BookGridElementComponent,
    BookGridComponent,
    BookListComponent,
    BookListElementComponent,
    BookViewToggleComponent,
    BookAddFormComponent,
    BookSearchComponent,
    BookDashboardComponent,
    BookDetailsComponent
  ],
  exports: [
    BookAddFormComponent,
    BookListComponent,
    BookGridComponent,
    BookViewToggleComponent,
    BookSearchComponent,
    BookDashboardComponent
  ],
  providers: [GoogleBooksService, BookService]
})
export class BookModule { }
