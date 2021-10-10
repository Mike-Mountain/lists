import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SessionQuery } from '../../../core/session/session.query';
import { takeUntil } from 'rxjs/operators';
import { AppUser } from '../../../core/session/session.model';

@Directive({
  selector: '[unauthenticated]',
})
export class UnauthenticatedDirective implements OnInit {
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
        if (user.id) {
          this.viewContainer.clear();
        } else {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
