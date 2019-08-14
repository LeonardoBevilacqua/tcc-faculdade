import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/home/home.module#HomeModule', },
  { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule', },
  { path: 'testes', loadChildren: './modules/testes/testes.module#TestesModule', },
  { path: 'job-details', loadChildren: './modules/job-details/job-details.module#JobDetailsModule', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
