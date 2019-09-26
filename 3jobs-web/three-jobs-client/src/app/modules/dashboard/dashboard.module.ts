import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateVacancyModalComponent } from './components/create-vacancy-modal/create-vacancy-modal.component';
import { JobDashboardComponent } from './pages/job-dashboard/job-dashboard.component';

@NgModule({
  declarations: [DashboardComponent, CreateVacancyModalComponent, JobDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
