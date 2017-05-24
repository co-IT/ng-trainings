import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

export { RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', component: BookDashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class BookRoutingModule { }
