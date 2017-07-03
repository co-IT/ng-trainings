import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Route[] = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class NotFoundRoutingModule { }
