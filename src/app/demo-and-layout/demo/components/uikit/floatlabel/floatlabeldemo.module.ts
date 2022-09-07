import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatLabelDemoComponent } from './floatlabeldemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../../../../shared-ng.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: FloatLabelDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [FloatLabelDemoComponent]
})
export class FloatlabelDemoModule {
}
