import { Routes, Router, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: Pages,
    children: [
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' }
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(pagesRoutes)],
  declarations: [Pages]
})
export class PagesModule { }
