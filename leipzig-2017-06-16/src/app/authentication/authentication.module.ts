import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication.routing.module';
import { AuthenticationService } from './core/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [AuthenticationService],
  exports: [LoginComponent]
})
export class AuthenticationModule { }
