import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionStore } from './session.store';
import { Session } from './session.model';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<Session> {
  isLoggedIn$ = this.select((state) => toBoolean(state.jwt));

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn() {
    return toBoolean(this.getValue().jwt);
  }
}
