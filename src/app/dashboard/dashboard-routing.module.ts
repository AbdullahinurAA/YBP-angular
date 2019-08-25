import { NgModule, Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { MainComponent } from "./main/main.component";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { ThreeComponent } from "./three/three.component";
import { FourComponent } from "./four/four.component";
import { FiveComponent } from "./five/five.component";
import { SixComponent } from "./six/six.component";
import { SevenComponent } from "./seven/seven.component";
import { EightComponent } from "./eight/eight.component";


const dashBoardRoutes : Route[] = [
  {
    path: 'companies',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'furniture',
        component: OneComponent,
      },  
      {
        path: 'finance',
        component: TwoComponent
      },
      {
        path: 'fashion',
        component: ThreeComponent
      },
      {
        path: 'travel',
        component: FourComponent
      },
      {
        path: 'medical',
        component: FiveComponent
      },
      {
        path: 'wholesale',
        component: SixComponent
      },
      {
        path: 'hotel',
        component: SevenComponent
      },
      {
        path: 'food',
        component: EightComponent
      },
     
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashBoardRoutes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
