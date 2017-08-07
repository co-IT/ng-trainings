import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UtilitiesModule } from '../utilities/utilities.module';

import { BookCardComponent } from './book-card/book-card.component';
import { BookGridComponent } from './book-grid/book-grid.component';

import { BooksService } from './core/books.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { BookEditComponent } from './book-edit/book-edit.component';

import { IsbnPipe } from './pipes/isbn.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,

    UtilitiesModule
  ],
  providers: [BooksService],
  declarations: [
    BookCardComponent,
    BookGridComponent,
    BookListComponent,
    BookAddFormComponent,
    BookEditComponent,
    IsbnPipe
  ],
  exports: [BookCardComponent, BookGridComponent, BookListComponent, BookAddFormComponent]
})
export class BookModule { }
