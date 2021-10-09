import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { RoleType } from '../../../shared/enums/role';
import { SessionService } from '../../session/session.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  roleType = RoleType;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private sessionService: SessionService
  ) {}

  route(path: string, drawer: MatDrawer) {
    this.router.navigate([path]).then(() => drawer.close());
  }

  logout(drawer: MatDrawer) {
    this.sessionService.logout();
    drawer.close();
  }
}
