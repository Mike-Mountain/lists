import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { SessionQuery } from '../../../core/session/session.query';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RoleType } from '../../enums/role';
import { AppUser } from '../../../core/session/session.model';

@Directive({
  selector: '[authenticatedWithRole]',
})
export class AuthenticatedWithRoleDirective implements OnInit, OnDestroy {
  @Input() authenticatedWithRole: RoleType | '' | undefined;

  private destroyed$ = new ReplaySubject<boolean>(1);

  constructor(
    private sessionQuery: SessionQuery,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.sessionQuery
      .select((state) => state.user)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user: AppUser) => {
        // If there is a required role, check that the user has that role
        // Else check that user exists
        if (this.authenticatedWithRole) {
          if (user.role.type === this.authenticatedWithRole) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        } else if (user.id) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
