import {RouterModule, Route} from '@angular/router';
import { NgModule } from '@angular/core';
import { BookDashboardComponent } from '../book/book-dashboard/book-dashboard.component';
import { BookDetailComponent } from '../book/book-detail/book-detail.component';
const routes: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: BookDashboardComponent },
  { path: 'books/:isbn', component: BookDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class BookRoutingModule { }
