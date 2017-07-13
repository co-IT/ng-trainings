import {BookDashboardComponent} from './book-dashboard/book-dashboard.component';
import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: BookDashboardComponent },
  { path: 'books', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
imports: [
  RouterModule.forChild(routes)
]
})

export class BookRoutingModule {}
