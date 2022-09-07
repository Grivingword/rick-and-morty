import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PrimeNgModule,
    PdfJsViewerModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PrimeNgModule,
    PdfJsViewerModule
  ]
})
export class SharedNgModule {
}
