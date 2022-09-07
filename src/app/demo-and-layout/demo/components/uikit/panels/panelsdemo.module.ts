import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelsDemoComponent } from './panelsdemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PanelsDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [PanelsDemoComponent]
})
export class PanelsDemoModule {
}
