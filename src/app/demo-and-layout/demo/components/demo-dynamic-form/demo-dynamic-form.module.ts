import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormPreviewComponent } from './dynamic-form-preview.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../../../shared-ng.module';
import { DynamicFormModule } from '../../../../_shared/components/dynamic-form.module';



@NgModule({
  declarations: [
    DynamicFormPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DynamicFormPreviewComponent}
    ]),
    SharedNgModule,
    DynamicFormModule
  ]
})
export class DemoDynamicFormModule { }
