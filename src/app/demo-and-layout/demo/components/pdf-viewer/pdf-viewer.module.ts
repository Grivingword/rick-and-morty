import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '../../../../shared-ng.module';
import { PdfViewerComponent } from './pdf-viewer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PdfViewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PdfViewerComponent}
    ]),
    SharedNgModule
  ]
})
export class PdfViewerModule {
}
