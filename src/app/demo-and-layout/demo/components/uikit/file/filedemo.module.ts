import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileDemoComponent } from './filedemo.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../../../../shared-ng.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: FileDemoComponent}
    ]),
    SharedNgModule
  ],
  declarations: [FileDemoComponent],
})
export class FileDemoModule {
}
