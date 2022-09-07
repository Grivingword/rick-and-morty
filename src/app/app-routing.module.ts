import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './demo-and-layout/layout/app.layout.component';
import { NotfoundComponent } from './demo-and-layout/demo/components/notfound/notfound.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout/character',
    pathMatch: "full"
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'character',
        loadChildren: () => import('./character/character.module').then(m => m.CharacterModule)
      },
    ]
  },
  {
    path: 'demo',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./demo-and-layout/demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'uikit',
        loadChildren: () => import('./demo-and-layout/demo/components/uikit/uikit.module').then(m => m.UikitModule)},
      {
        path: 'blocks',
        loadChildren: () => import('./demo-and-layout/demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./demo-and-layout/demo/components/pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'pdf-viewer',
        loadChildren:() => import('./demo-and-layout/demo/components/pdf-viewer/pdf-viewer.module').then(m => m.PdfViewerModule)
      },
      {
        path: 'dynamic-form',
        loadChildren:() => import('./demo-and-layout/demo/components/demo-dynamic-form/demo-dynamic-form.module').then(m => m.DemoDynamicFormModule)
      },
    ],
  },

  {
    path: 'auth',
    loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'landing', loadChildren: () => import('./demo-and-layout/demo/components/landing/landing.module').then(m => m.LandingModule)
  },

  // {
  //   path: 'pages/notfound', component: NotfoundComponent
  // },
  //
  // {
  //   path: '**', redirectTo: 'pages/notfound'
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
