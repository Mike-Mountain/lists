import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { Session } from './session.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionStore: SessionStore, private http: HttpClient) {}

  public setSession(session: Session) {
    this.sessionStore.login(session);
  }

  public login(identifier: string, password: string): Observable<Session> {
    const url = `${environment.apiUrl}/auth/local`;
    return this.http.post<Session>(url, { identifier, password }).pipe(
      tap((session) => {
        this.sessionStore.login(session);
      })
    );
  }

  public register(
    username: string,
    email: string,
    password: string
  ): Observable<Session> {
    const url = `${environment.apiUrl}/auth/local/register`;
    return this.http
      .post<Session>(url, { username, email, password })
      .pipe(tap((session) => this.sessionStore.login(session)));
  }

  public logout() {
    this.sessionStore.logout();
  }
}
