import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SearchComponent } from './core/search/search.component';
import {ProfileComponent} from './core/profile/profile.component'
import { JobDetailsComponent } from './core/job-details/job-details.component';
import { CreateAccountComponent } from './core/create-account/create-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'jobDetails', component: JobDetailsComponent },
  { path: 'createAccount', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
