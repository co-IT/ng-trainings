import { RouterModule, Route } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from "app/authentication/login/login.component";


const routes: Route[] = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationRoutingModule { }
