import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesModule } from '../utilities/utilities.module';

import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { ToggleViewModeComponent } from './toggle-view-mode/toggle-view-mode.component';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesModule
  ],
  declarations: [
    BookGridElementComponent,
    BookGridComponent,
    ToggleViewModeComponent,
    BookListElementComponent,
    BookListComponent],
  exports: [BookListComponent, BookGridComponent, ToggleViewModeComponent]
})
export class BookModule { }
