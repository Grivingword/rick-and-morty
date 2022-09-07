import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
