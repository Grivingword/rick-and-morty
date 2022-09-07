import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoComponent } from './emptydemo.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: EmptyDemoComponent}
    ])
  ],
  declarations: [EmptyDemoComponent]
})
export class EmptyDemoModule {
}
