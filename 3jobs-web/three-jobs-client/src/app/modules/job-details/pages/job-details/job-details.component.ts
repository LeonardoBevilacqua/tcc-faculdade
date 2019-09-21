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
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';


@Component({ selector: 'app-job-details', templateUrl: './job-details.component.html' })
export class JobDetailsComponent implements OnInit {

  isLoggedUserProfile: boolean;

  job: Job;
  user: User;

  
  constructor(
      private titleService: Title,
      private jobService: JobService,
      private router: Router,
      private toast: ToastrService,
      private spinnerService: Ng4LoadingSpinnerService,
      private authService: AuthService) {
        this.user = new User();
      this.job = new Job();
      this.job.company = new Company;
      this.job.company.address = new Address;
      this.job.tags = []
     
      }
      

  ngOnInit() {
      // set the page title
      this.titleService.setTitle(`3Jobs | Vagas`);

      console.log(this.authService.getUserId())

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



  apply(){

    this.job.users = [];
    this.user.id = this.authService.getUserId()
    this.job.users.push(this.user)
    console.log(    this.job.users)
  }

}
