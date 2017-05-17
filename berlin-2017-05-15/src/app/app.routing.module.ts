import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Route[] = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
