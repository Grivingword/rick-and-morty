import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLayoutComponent } from './formlayout.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../../../../shared-ng.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: FormLayoutComponent}
    ]),
    SharedNgModule
  ],
  declarations: [FormLayoutComponent]
})
export class FormlayoutModule {
}
