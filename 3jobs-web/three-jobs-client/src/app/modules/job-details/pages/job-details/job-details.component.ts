import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/core/services/job.service';
import { Job } from 'src/app/shared/models/job';
import { HttpErrorResponse } from '@angular/common/http';
import { Company } from 'src/app/shared/models/company';
import { Address } from 'src/app/shared/models/address';


@Component({ selector: 'app-job-details', templateUrl: './job-details.component.html' })
export class JobDetailsComponent implements OnInit {

  isLoggedUserProfile: boolean;

  job: Job;

  
  constructor(
      private titleService: Title,
      private jobService: JobService,
      private router: Router,
      private toast: ToastrService,
      private spinnerService: Ng4LoadingSpinnerService) {
      this.job = new Job();
      this.job.company = new Company;
      this.job.company.address = new Address;
      this.job.tags = []
      }
      

  ngOnInit() {
      // set the page title
      this.titleService.setTitle(`3Jobs | Vagas`);

      this.spinnerService.show();

      this.isLoggedUserProfile = true;

      // get the current path id if exists
      const currentId = +this.router.url.split('/')[2];

      this.jobService.read(currentId).subscribe(
          (job: Job) => {
            console.log(job)
              this.job = job;              
              this.spinnerService.hide();
          },
          (error: HttpErrorResponse) => {
              this.spinnerService.hide();

              if (error.status === 404) {
                  this.toast.error('A Vaga que está tentando buscar não existe!');
              }
              else if (error.status === 401) {
                  this.toast.error(error.error.error);
              }
              else {
                  this.toast.error('Ocorreu um erro inesperado, por favor aguarde!');
              }
              this.router.navigateByUrl('/');
          }
      );
  }

}
