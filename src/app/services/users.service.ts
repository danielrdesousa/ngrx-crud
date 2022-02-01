import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../models/user.model';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API: string = environment.API;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${this.API}/users`);
  }

  findById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.API}/users/${id}`);
  }

  create(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(`${this.API}/users`, user);
  }

  update(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.API}/users/${user.id}`, user);
  }
  
  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.API}/users/${id}`);
  }

}
