import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

export { RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', component: BookDashboardComponent, pathMatch: 'full' },
  { path: 'details/:isbn', component: BookDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class BookRoutingModule { }
