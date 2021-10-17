import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './Material/material.module';
import { AuthenticatedWithRoleDirective } from './directives/authenticated-with-role/authenticated-with-role.directive';
import { UnauthenticatedDirective } from './directives/unauthenticated/unauthenticated.directive';
import { BgImageDirective } from './directives/bg-image/bg-image.directive';
import { AssertPipe } from './pipes/type-assert/assert.pipe';
import { HasItemsPipe } from './pipes/has-items/has-items.pipe';

@NgModule({
  declarations: [
    AuthenticatedWithRoleDirective,
    UnauthenticatedDirective,
    BgImageDirective,
    AssertPipe,
    HasItemsPipe,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    AuthenticatedWithRoleDirective,
    UnauthenticatedDirective,
    BgImageDirective,
    AssertPipe,
    HasItemsPipe,
  ],
})
export class SharedModule {}
