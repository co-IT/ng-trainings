import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BookGridComponent } from './book/book-grid/book-grid.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';


const routes: Route[] = [
  { path: '', component: BookGridComponent, pathMatch: 'full' },
  { path: 'list/:id', component: BookListComponent },
  { path: 'book/:isbn', component: BookEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
