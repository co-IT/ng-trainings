import { RouterModule } from '@angular/router';
import { BookService } from './core/book.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UtilitiesModule } from '../utilities/utilities.module';

import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { ToggleViewModeComponent } from './toggle-view-mode/toggle-view-mode.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    BookGridElementComponent,
    BookGridComponent,
    ToggleViewModeComponent,
    BookListElementComponent,
    BookListComponent,
    BookAddFormComponent,
    BookDashboardComponent,
    BookDetailsComponent],
  exports: [BookListComponent, BookGridComponent, ToggleViewModeComponent, BookAddFormComponent, BookDashboardComponent],
  providers: [BookService]
})
export class BookModule { }
