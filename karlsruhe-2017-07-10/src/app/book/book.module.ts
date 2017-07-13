import {ToggleViewModeComponent} from './toggle-view-mode/toggle-view-mode.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { BookAddFormModelComponent } from './book-add-form-model/book-add-form-model.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookRoutingModule } from './book.routing.module';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    ToggleViewModeComponent,
    BookGridElementComponent,
    BookGridComponent,
    BookListComponent,
    BookListElementComponent,
    BookAddFormComponent,
    BookAddFormModelComponent,
    BookDashboardComponent
  ],
  exports: [
    BookDashboardComponent]
})
export class BookModule { }
