import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineDemoComponent } from './timelinedemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    RouterModule.forChild([
      {path: '', component: TimelineDemoComponent}
    ])
  ],
  declarations: [TimelineDemoComponent]
})
export class TimelineDemoModule {
}
