import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from 'clarity-angular';

import { BookGridComponent } from './book-grid/book-grid.component';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { ViewToggleComponent } from './view-toggle/view-toggle.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';

@NgModule({
  imports: [
    CommonModule,

    ClarityModule.forChild()
  ],
  declarations: [BookGridElementComponent, BookGridComponent, ViewToggleComponent, BookListComponent, BookListElementComponent],
  exports: [BookGridElementComponent, BookGridComponent, ViewToggleComponent, BookListComponent]
})
export class BookModule { }
