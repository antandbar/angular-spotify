import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/* import { CookieService } from 'ngx-cookie-service'; */
import { Observable, tap } from 'rxjs';
import { enviorement } from 'src/enviorements/enviorement';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = enviorement.api;

  constructor(private http: HttpClient, /* private cookie: CookieService */) { }
  
  sendCredentials(email:string, password:string): Observable<any> {

    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body)
/*     .pipe(
      tap((responseOk:any) => {
        const { tokenSession, data } = responseOk;
        this.cookie.set('token_service', tokenSession, 4, '/');
      })
    ) */

  }
}
