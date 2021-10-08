import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../environments/environment";
import {AkitaNgDevtools} from "@datorama/akita-ngdevtools";
import {AkitaNgRouterStoreModule} from "@datorama/akita-ng-router-store";



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AkitaNgDevtools,
    AkitaNgRouterStoreModule
  ]
})
export class CoreModule { }
