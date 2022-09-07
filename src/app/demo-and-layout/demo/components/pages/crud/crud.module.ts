import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CrudComponent}
    ]),
    SharedNgModule
  ],
  declarations: [CrudComponent]
})
export class CrudModule {
}
