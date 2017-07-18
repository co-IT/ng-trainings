import {BookDashboardComponent} from './book-dashboard/book-dashboard.component';
import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: BookDashboardComponent },
  { path: 'book/:isbn', component: BookDetailComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
imports: [
  RouterModule.forChild(routes)
]
})

export class BookRoutingModule {}
