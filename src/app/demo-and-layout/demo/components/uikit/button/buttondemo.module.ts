import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDemoComponent } from './buttondemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../../../../shared-ng.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ButtonDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [ButtonDemoComponent]
})
export class ButtonDemoModule {
}
