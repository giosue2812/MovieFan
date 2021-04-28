import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfilComponent } from './profil/profil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResetPasswordComponent } from './profil/reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './service/user.service';
import { UserResolver } from './service/user.resolver';


@NgModule({
  declarations: [
    UserComponent,
    ProfilComponent,
    ResetPasswordComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  providers:[UserResolver]
})
export class UserModule { }
