import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BookDashboardComponent } from './book/book-dashboard/book-dashboard.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Route[] = [
 { path: '', component: BookDashboardComponent, pathMatch: 'full' },
 { path: 'book/:isbn', component: BookEditComponent },
 { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
