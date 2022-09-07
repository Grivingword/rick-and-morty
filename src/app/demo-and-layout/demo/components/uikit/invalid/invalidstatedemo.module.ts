import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidStateDemoComponent } from './invalidstatedemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: InvalidStateDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [InvalidStateDemoComponent]
})
export class InvalidStateDemoModule {
}
