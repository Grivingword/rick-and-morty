import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscDemoComponent } from './miscdemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MiscDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [MiscDemoComponent]
})
export class MiscDemoModule {
}
