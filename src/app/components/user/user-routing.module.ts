import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { ResetPasswordComponent } from './profil/reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './service/user.resolver';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'profil',component:ProfilComponent},
  {path:'reset/:id',resolve:{user:UserResolver},component:ResetPasswordComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
