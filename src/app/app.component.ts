import { Component, OnInit } from '@angular/core';
import { StorageService } from './shared/services/storage/storage.service';
import { SessionService } from './core/session/session.service';
import { AppUser } from './core/session/session.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lists';

  constructor(
    private storage: StorageService,
    private session: SessionService
  ) {}

  ngOnInit() {
    if (this.storage.hasItems()) {
      const jwt = this.storage.getItem('token');
      const userString = this.storage.getItem('user');
      let user: AppUser | undefined;
      if (userString) {
        user = new AppUser(JSON.parse(userString));
      } else {
        user = undefined;
      }
      if (user && jwt) {
        this.session.setSession({ jwt, user });
      }
    }
  }
}
