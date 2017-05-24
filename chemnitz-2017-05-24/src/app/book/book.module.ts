import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookGridElementComponent, BookGridComponent, BookAddFormComponent],
  exports: [BookGridElementComponent, BookGridComponent, BookAddFormComponent]
})
export class BookModule { }
