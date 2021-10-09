import { AuthenticatedWithRoleDirective } from './authenticated-with-role.directive';
import { SessionQuery } from '../../../core/session/session.query';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe('AuthenticatedWithRoleDirective', () => {
  it('should create an instance', () => {
    const directive = new AuthenticatedWithRoleDirective(
      {} as SessionQuery,
      {} as ViewContainerRef,
      {} as TemplateRef<any>
    );
    expect(directive).toBeTruthy();
  });
});
