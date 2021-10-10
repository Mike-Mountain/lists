import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionStore } from './session.store';
import { Session } from './session.model';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<Session> {
  isLoggedIn$ = this.select((state) => !!state.jwt);

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn(): boolean {
    return !!this.getValue().jwt.trim();
  }
}
