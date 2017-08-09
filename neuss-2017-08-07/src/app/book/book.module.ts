import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ClarityModule } from 'clarity-angular';

import { UtilitiesModule } from '../utilities/utilities.module';

import { BookGridComponent } from './book-grid/book-grid.component';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { ViewToggleComponent } from './view-toggle/view-toggle.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './core/http.interceptor';

import { BookService } from './core/book.service';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,

    ClarityModule.forChild(),

    UtilitiesModule
  ],
  declarations: [
    BookGridElementComponent,
    BookGridComponent,
    ViewToggleComponent,
    BookListComponent,
    BookListElementComponent,
    BookAddFormComponent,
    BookDashboardComponent,
    BookEditComponent],
  exports: [
    BookGridComponent,
    ViewToggleComponent,
    BookListComponent,
    BookAddFormComponent
  ],
  providers: [
    BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }
  ]
})
export class BookModule { }
