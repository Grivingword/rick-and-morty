import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDemoComponent } from './tabledemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TableDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [TableDemoComponent]
})
export class TableDemoModule {
}
