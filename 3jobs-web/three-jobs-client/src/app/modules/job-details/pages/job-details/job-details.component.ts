import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { JobService } from 'src/app/core/services/job.service';
import { Address } from 'src/app/shared/models/address';
import { Company } from 'src/app/shared/models/company';
import { Job } from 'src/app/shared/models/job';
import { User } from 'src/app/shared/models/user';
import { Role } from 'src/app/shared/models/enums/role.enum';


@Component({ selector: 'app-job-details', templateUrl: './job-details.component.html' })
export class JobDetailsComponent implements OnInit {


    job: Job;
    jobMatch: Array<Job>;
    user: User;
    currentId: number;

    constructor(
        private titleService: Title,
        private jobService: JobService,
        private router: Router,
        private toast: ToastrService,
        private spinnerService: Ng4LoadingSpinnerService,
        private authService: AuthService) {
        this.user = new User();
        this.job = new Job();
        this.job.company = new Company();
        this.job.company.address = new Address();
        this.jobMatch = [new Job()];

    }

    ngOnInit() {
        // set the page title
        this.titleService.setTitle(`3Jobs | Vagas`);

        this.spinnerService.show();

        // get the current path id if exists
        this.currentId = +this.router.url.split('/')[2];

        this.jobService.read(this.currentId).subscribe(
            (job: Job) => {
                this.job = job;
                this.jobService.search(this.job.description, 0, 4).subscribe(
                    ((res: any) => {
                        this.jobMatch = res.content;
                    }
                    )
                );
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
    apply() {
        if (this.authService.getToken() == null) {
            this.toast.warning('Por gentileza, Logar no Sistema para Candidatar-se');
        } else {
            this.jobService.register(this.authService.getUserId(), this.currentId).subscribe(
                (response: any) => {
                    this.spinnerService.hide();
                    this.toast.success('Cadastrado com sucesso!');
                    this.router.navigateByUrl('/dashboard');
                },
                (error: HttpErrorResponse) => {
                    this.toast.error('Ocorreu um erro inesperado, por favor aguarde!');
                }
            );

        }
    }

    public shouldDisplaySubscribeButton() {
        const role = this.authService.getUserRole();

        return role !== Role.ROLE_RECRUTER && role !== Role.ROLE_RECRUTER_ADMIN;
    }
}
