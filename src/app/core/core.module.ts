import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../environments/environment";
import {AkitaNgDevtools} from "@datorama/akita-ngdevtools";
import {AkitaNgRouterStoreModule} from "@datorama/akita-ng-router-store";
import {LayoutComponent} from './components/layout/layout.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {LandingComponent} from './components/landing/landing.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    // Modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AkitaNgDevtools,
    AkitaNgRouterStoreModule,
    // Components
    LayoutComponent,
    LandingComponent
  ]
})
export class CoreModule {
}
