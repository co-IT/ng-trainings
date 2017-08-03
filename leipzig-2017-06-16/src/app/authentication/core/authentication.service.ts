import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper} from 'angular2-jwt' ;

@Injectable()
export class AuthenticationService {
  username: string;
  role: string;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post('http://localhost:4280/auth/login', {user: username, password: password})
    .map(res => res.json());
  }

  storeToken(token) {

  }

  setUser(token){

    this.username = this.jwtHelper.decodeToken(token).user;
    this.role = this.jwtHelper.decodeToken(token).role;
  }

}
