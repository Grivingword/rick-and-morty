import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'formlayout', loadChildren: () => import('./formlayout/formlayout.module').then(m => m.FormlayoutModule)},
  {path: 'button', loadChildren: () => import('./button/buttondemo.module').then(m => m.ButtonDemoModule)},
  {path: 'file', loadChildren: () => import('./file/filedemo.module').then(m => m.FileDemoModule)},
  {
    path: 'floatlabel',
    loadChildren: () => import('./floatlabel/floatlabeldemo.module').then(m => m.FloatlabelDemoModule)
  },
  {path: 'input', loadChildren: () => import('./input/inputdemo.module').then(m => m.InputDemoModule)},
  {
    path: 'invalidstate',
    loadChildren: () => import('./invalid/invalidstatedemo.module').then(m => m.InvalidStateDemoModule)
  },
  {path: 'list', loadChildren: () => import('./list/listdemo.module').then(m => m.ListDemoModule)},
  {path: 'media', loadChildren: () => import('./media/mediademo.module').then(m => m.MediaDemoModule)},
  {path: 'message', loadChildren: () => import('./messages/messagesdemo.module').then(m => m.MessagesDemoModule)},
  {path: 'misc', loadChildren: () => import('./misc/miscdemo.module').then(m => m.MiscDemoModule)},
  {path: 'overlay', loadChildren: () => import('./overlays/overlaysdemo.module').then(m => m.OverlaysDemoModule)},
  {path: 'panel', loadChildren: () => import('./panels/panelsdemo.module').then(m => m.PanelsDemoModule)},
  {path: 'table', loadChildren: () => import('./table/tabledemo.module').then(m => m.TableDemoModule)},
  {path: 'tree', loadChildren: () => import('./tree/treedemo.module').then(m => m.TreeDemoModule)},
  {path: 'menu', loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule)}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class UikitModule {
}
