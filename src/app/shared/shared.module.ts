import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './Material/material.module';
import { AuthenticatedWithRoleDirective } from './directives/authenticated-with-role/authenticated-with-role.directive';

@NgModule({
  declarations: [AuthenticatedWithRoleDirective],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, AuthenticatedWithRoleDirective],
})
export class SharedModule {}
