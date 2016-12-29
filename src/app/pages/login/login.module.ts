import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

export const LoginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(LoginRoutes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
