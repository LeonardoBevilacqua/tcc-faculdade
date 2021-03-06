import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/mechanism/auth.guard';
import { LoggedInGuard } from './core/mechanism/logged-in.guard';

const routes: Routes = [
  { path: '', loadChildren: './modules/home/home.module#HomeModule', canActivate: [LoggedInGuard] },
  { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
  { path: 'search', loadChildren: './modules/search/search.module#SearchModule'},
  { path: 'testes', loadChildren: './modules/testes/testes.module#TestesModule', },
  { path: 'job-details', loadChildren: './modules/job-details/job-details.module#JobDetailsModule', },
  { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
  { path: 'register', loadChildren: './modules/register/register.module#RegisterModule', canActivate: [LoggedInGuard] },
  { path: 'company', loadChildren: './modules/company/company.module#CompanyModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
