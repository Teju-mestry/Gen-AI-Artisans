import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/auth';

  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  isLoggedIn(): boolean {
    // Check if token exists in local storage or any other logic to determine if user is authenticated
    return !!localStorage.getItem('token'); // Example using a token
  }
  logout() {
    localStorage.removeItem('token'); // Remove the token
  }
}
