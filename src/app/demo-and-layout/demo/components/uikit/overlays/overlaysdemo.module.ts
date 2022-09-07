import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlaysDemoComponent } from './overlaysdemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: OverlaysDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [OverlaysDemoComponent]
})
export class OverlaysDemoModule {
}
