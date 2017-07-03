import {RouterModule, Route} from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found/not-found.component';

const routes: Route[] = [
  {path: '**', loadChildren: './not-found/not-found.module#NotFoundModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
