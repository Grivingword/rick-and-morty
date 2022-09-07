import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesDemoComponent } from './messagesdemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MessagesDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [MessagesDemoComponent]
})
export class MessagesDemoModule {
}
