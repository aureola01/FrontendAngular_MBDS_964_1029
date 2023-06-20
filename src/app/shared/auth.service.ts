import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  uri_api = 'https://backend-mbds-964-1029.onrender.com/api';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  // théoriquement, on devrait passer en paramètre le login
  // et le password, cette méthode devrait faire une requête
  // vers un Web Service pour vérifier que c'est ok, renvoyer
  // un token d'authentification JWT etc.
  // elle devrait renvoyer un Observable etc.
  logIn(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.uri_api}/login`, { email, password }).pipe(
      tap((response) => {
        const token = response.token;
        if (token) {
          localStorage.setItem('token', token);
        }
      })
    );
  }

  logOut() {
    console.log("ON SE DELOGGE")

    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true
    }
    return false
  }

  decodeToken() {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = this.jwtHelper.decodeToken(token);
      return tokenPayload;
    }
  }

  // si on l'utilisait on ferai isAdmin().then(...)
  isAdmin() {
    if (!this.isLoggedIn) return false
    const payLoad = this.decodeToken()
    console.log("tokenPayload = "+JSON.stringify(payLoad));
    if (payLoad.user.role == "admin") return true
    return false
  }
}
