import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BookDashboardComponent } from './book/book-dashboard/book-dashboard.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Route[] = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: BookDashboardComponent },
  { path: 'details/:isbn', component: BookDetailsComponent },
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
