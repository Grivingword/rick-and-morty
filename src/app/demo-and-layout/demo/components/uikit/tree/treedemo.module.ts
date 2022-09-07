import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeDemoComponent } from './treedemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TreeDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [TreeDemoComponent],
})
export class TreeDemoModule {
}
