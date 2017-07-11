import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesModule
  ],
  declarations: [BookGridElementComponent, BookGridComponent, BookListComponent, BookListElementComponent, BookAddFormComponent],
  exports: [UtilitiesModule, BookGridElementComponent, BookGridComponent, BookListComponent, BookListElementComponent, BookAddFormComponent]
})
export class BookModule { }
