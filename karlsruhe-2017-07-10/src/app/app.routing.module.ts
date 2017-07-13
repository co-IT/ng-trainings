import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {
  NotFoundComponent
} from 'app/not-found/not-found.component';

const routes: Route[] = [
  {path: '', component: NotFoundComponent}
]

@NgModule({
imports: [
  RouterModule.forRoot(routes)
]
})

export class AppRoutingModule { }
