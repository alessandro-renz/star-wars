import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL_BASE = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  login(data: {email: string, password: string}): Observable<any>{
    return this.http.post(`${this.URL_BASE}/sign`, data).pipe(
      tap((res: any) => {
        localStorage.removeItem("token")
        localStorage.setItem("token", res.token)
      })
    )
  }
}
