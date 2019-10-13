import { Profile } from './../../../../shared/models/profile';
import { CompanyService } from 'src/app/core/services/company.service';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/core/services/job.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Role } from 'src/app/shared/models/enums/role.enum';
import { Company } from 'src/app/shared/models/company';
import { User } from 'src/app/shared/models/user';

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.scss'] })
export class DashboardComponent implements OnInit {

    vacancies: Array<Job>;
    recruiters: Array<User>;
    user: User;

    constructor(private authService: AuthService, private jobService: JobService, private companyService: CompanyService) {
        this.user = this.authService.getUser();
    }

    job: Job;
    ngOnInit() {

        this.job = new Job();
        this.getAllVacancies();
        this.getAllRecruiter();
    }

    public createVacancy() {


        this.job = new Job();
        this.job.company = new Company();
        this.job.company.id = this.user.companyId;

        this.job.recruter = new User();
        this.job.recruter.id = this.user.id;
    }

    public toEditVacancy(vacancy: Job) {
        this.job = vacancy;
    }

    private getAllVacancies() {

        this.jobService.getAll().subscribe(
            (response) => {
                this.vacancies = response.content;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    private getAllRecruiter() {

        this.companyService.read(this.user.companyId).subscribe(
            (response) => {
                this.recruiters = response.recruters;
            },
            (error) => {
                console.log(error);
            }
        );
    }


    shouldDisplayRecrutersTable() {
        return this.authService.getUserRole() === Role.RECRUTER_ADMIN;
    }

}
