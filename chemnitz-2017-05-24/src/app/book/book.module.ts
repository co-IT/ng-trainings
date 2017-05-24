import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookGridElementComponent],
  exports: [BookGridElementComponent]
})
export class BookModule { }
