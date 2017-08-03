import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'app/authentication/core/authentication.service';

@Component({
  selector: 'tr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';
  loginerror = false;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginerror = false;
    this.authService.login(this.user, this.password)

    .subscribe(res => {
      this.authService.setUser(res.token);
      this.authService.storeToken(res.token);
      this.router.navigate(['/']);
    }, err => {
      this.loginerror = true;
    });

  }

}
