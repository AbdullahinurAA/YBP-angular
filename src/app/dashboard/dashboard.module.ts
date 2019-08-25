import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from "@angular/router";
import { DashboardRoutingModule } from './dashboard-routing.module';
import { OneComponent } from "./one/one.component";
import { TwoComponent } from './two/two.component';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { MainComponent } from './main/main.component';
import { AgmCoreModule } from '@agm/core';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';





@NgModule({
  declarations: [
    DashboardComponent,
    OneComponent,
    TwoComponent,
    MainComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),

  ],
  providers: [MDBSpinningPreloader],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class DashboardModule { }
