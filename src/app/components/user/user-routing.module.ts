import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from 'src/app/shared/guard/is-auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { ResetPasswordComponent } from './profil/reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './service/user.resolver';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'',canActivate:[IsAuthGuard],component:UserComponent},
  {path:'profil',canActivate:[IsAuthGuard],component:ProfilComponent},
  {path:'reset/:id',canActivate:[IsAuthGuard],resolve:{user:UserResolver},component:ResetPasswordComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
