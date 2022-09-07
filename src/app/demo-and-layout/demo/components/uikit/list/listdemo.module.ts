import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDemoComponent } from './listdemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ListDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [ListDemoComponent]
})
export class ListDemoModule {
}
