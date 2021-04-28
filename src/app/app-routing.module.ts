import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from './shared/guard/is-auth.guard';

const routes: Routes = [
  {path:"movie",loadChildren:()=>import('./components/movie/movie.module').then(m => m.MovieModule)},
  {path:"notice",loadChildren:()=>import('./components/notice/notice.module').then(m => m.NoticeModule)},
  {path:"person",loadChildren:()=>import('./components/person/person.module').then(m => m.PersonModule)},
  {path:'user',loadChildren:()=>import('./components/user/user.module').then(m=>m.UserModule)},
  {path:'',redirectTo:'movie',pathMatch:'full'},
  {path:'**',redirectTo:'movie',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
