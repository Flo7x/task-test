import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { iUser } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getUsers(email: string, gender: string): Observable<iUser> {
    const params = new HttpParams().set('email', email).set('gender', gender);
    return this.http.get<iUser>('https://gorest.co.in/public/v2/users', { params });
  }
}
