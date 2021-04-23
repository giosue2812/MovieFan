import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"movie",loadChildren:()=>import('./components/movie/movie.module').then(m => m.MovieModule)},
  {path:"notice",loadChildren:()=>import('./components/notice/notice.module').then(m => m.NoticeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
