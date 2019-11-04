import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { JobDetailsRoutingModule } from './job-details-routing.module';
import { JobDetailsComponent } from './pages/job-details/job-details.component';

@NgModule({
  declarations: [JobDetailsComponent],
  imports: [
    CommonModule,
    JobDetailsRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class JobDetailsModule { }
