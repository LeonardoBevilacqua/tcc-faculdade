import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule', },
  { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule', },
  { path: '', loadChildren: './modules/search/search.module#SearchModule', },
  { path: 'testes', loadChildren: './modules/testes/testes.module#TestesModule', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
