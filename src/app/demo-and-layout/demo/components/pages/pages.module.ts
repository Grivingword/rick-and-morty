import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule)},
      {path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule)},
      {path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule)}
    ])
  ]
})
export class PagesModule {
}
