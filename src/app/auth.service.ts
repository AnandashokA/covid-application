import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // [x: string]: any;

  apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Change this to your backend API URL

  constructor(private http: HttpClient) { }

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}`, { username, password });
  // }
  getCenter():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}

