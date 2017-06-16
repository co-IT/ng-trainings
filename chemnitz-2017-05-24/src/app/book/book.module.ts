import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule, RouterModule } from './book.routing.module';

import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';

import { BookService } from './core/book.service';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BookRoutingModule,
  ],
  declarations: [BookGridElementComponent, BookGridComponent, BookAddFormComponent, BookDashboardComponent, BookDetailsComponent],
  exports: [BookGridElementComponent, BookGridComponent, BookAddFormComponent, BookDashboardComponent],
  providers: [BookService]
})
export class BookModule { }
