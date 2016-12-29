import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';


export const RegisterRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(RegisterRoutes)
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
