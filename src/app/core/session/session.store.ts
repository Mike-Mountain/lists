import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { createEmptyState, Session } from './session.model';
import { StorageService } from '../../shared/services/storage/storage.service';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<Session> {
  constructor(private storage: StorageService) {
    super(createEmptyState());
  }

  login(session: Session) {
    this.update(session);
    this.storage.setItem('token', session.jwt);
    this.storage.setItem('user', JSON.stringify(session.user));
  }

  logout() {
    this.update(createEmptyState());
    this.storage.clearStorage();
  }
}
