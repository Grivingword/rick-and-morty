import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaDemoComponent } from './mediademo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from "../../../../../shared-ng.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MediaDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [MediaDemoComponent]
})
export class MediaDemoModule {
}
