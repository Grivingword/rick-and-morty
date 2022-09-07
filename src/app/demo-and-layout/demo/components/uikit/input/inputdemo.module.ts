import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDemoComponent } from './inputdemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../../../../shared-ng.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: InputDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [InputDemoComponent]
})
export class InputDemoModule {
}
