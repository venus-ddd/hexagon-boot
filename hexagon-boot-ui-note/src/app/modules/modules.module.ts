import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ModulesRoutingModule} from "./modules-routing.module";
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule, MatSidenavModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule
} from "@angular/material";
import {FuncViewModule} from "../@views/func/func-view.module";


const PAGES_COMPONENTS = [
  DashboardComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,

    FuncViewModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ]
})
export class ModulesModule {
}
