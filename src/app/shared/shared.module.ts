import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './Material/material.module';
import { AuthenticatedWithRoleDirective } from './directives/authenticated-with-role/authenticated-with-role.directive';
import { UnauthenticatedDirective } from './directives/unauthenticated/unauthenticated.directive';
import { BgImageDirective } from './directives/bg-image/bg-image.directive';

@NgModule({
  declarations: [
    AuthenticatedWithRoleDirective,
    UnauthenticatedDirective,
    BgImageDirective,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    AuthenticatedWithRoleDirective,
    UnauthenticatedDirective,
    BgImageDirective,
  ],
})
export class SharedModule {}
