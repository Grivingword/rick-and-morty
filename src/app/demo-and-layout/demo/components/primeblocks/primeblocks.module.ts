import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockViewer } from './blockviewer/blockviewer.component'
import { AppCodeModule } from '../code/code.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../../../shared-ng.module';

@NgModule({
  imports: [
    CommonModule,
    SharedNgModule,
    RouterModule.forChild([
      {path: '', component: BlocksComponent}
    ]),
    AppCodeModule
  ],
  declarations: [BlocksComponent, BlockViewer]
})
export class PrimeBlocksModule {
}
