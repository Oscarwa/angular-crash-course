import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: User;

  constructor(
    private http: HttpClient
  ) { }

  getUsers() : Observable<any> {
    return this.http.get('https://reqres.in/api/users');
  }

  getUserById(id) : Observable<any> {
    return this.http.get('https://reqres.in/api/users/' + id);
  }
}
