import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailsRoutingModule } from './job-details-routing.module';
import { JobDetailsComponent } from './pages/job-details/job-details.component';

@NgModule({
  declarations: [JobDetailsComponent],
  imports: [
    CommonModule,
    JobDetailsRoutingModule
  ]
})
export class JobDetailsModule { }
