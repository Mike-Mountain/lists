import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { createEmptyState, Session } from './session.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<Session> {
  constructor() {
    super(createEmptyState());
  }

  login(session: Session) {
    this.update(session);
  }

  logout() {
    this.update(createEmptyState());
  }
}
