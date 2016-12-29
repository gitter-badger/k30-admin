import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'pages/ui', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' }/*,
  { path: '**', redirectTo: '/register' }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      enableTracing: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
