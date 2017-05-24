import { BookDetailsGuard } from './core/guards/book-details.guard';
import { BookResolver } from './core/resolvers/book.resolver';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Route[] = [
  { path: '', component: BookDashboardComponent, pathMatch: 'full' },
  {
    path: 'book/:isbn',
    component: BookDetailsComponent,
    resolve: { book: BookResolver },
    canActivate: [BookDetailsGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [BookDetailsGuard, BookResolver]
})
export class BookRoutingModule { }
