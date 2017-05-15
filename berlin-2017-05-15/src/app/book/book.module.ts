import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookGridElementComponent, BookGridComponent],
  exports: [BookGridElementComponent, BookGridComponent]
})
export class BookModule { }
