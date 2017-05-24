import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export { RouterModule} from '@angular/router';

const routes: Route[] = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
