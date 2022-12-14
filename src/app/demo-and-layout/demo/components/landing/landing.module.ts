import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LandingComponent}
    ]),
    SharedNgModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule {
}
