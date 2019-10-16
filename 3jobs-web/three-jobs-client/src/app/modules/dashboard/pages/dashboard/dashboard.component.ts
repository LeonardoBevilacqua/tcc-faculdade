import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CompanyService } from 'src/app/core/services/company.service';
import { JobService } from 'src/app/core/services/job.service';
import { UserService } from 'src/app/core/services/user.service';
import { Company } from 'src/app/shared/models/company';
import { Role } from 'src/app/shared/models/enums/role.enum';
import { Job } from 'src/app/shared/models/job';
import { User } from 'src/app/shared/models/user';
import { isNullOrUndefined } from 'util';

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.scss'] })
export class DashboardComponent implements OnInit {

    vacancies: Array<Job>;
    recruiters: Array<User>;
    user: User;

    constructor(
        private authService: AuthService,
        private jobService: JobService,
        private companyService: CompanyService,
        private userService: UserService) {
        this.user = this.authService.getUser();
    }

    job: Job;
    ngOnInit() {
        this.checkIfUserHasCompanyId();

        this.job = new Job();
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

    private checkIfUserHasCompanyId() {
        if (this.user && isNullOrUndefined(this.user.companyId)) {
            this.userService.read(this.user.id).subscribe(
                (response) => {
                    this.authService.setUser(response);
                    this.getAllRecruiter();
                    this.getAllVacancies();
                },
                () => {
                    this.authService.logout();
                }
            );
        }
        else {
            this.getAllRecruiter();
            this.getAllVacancies();
        }
    }

    shouldDisplayRecrutersTable() {
        return this.authService.getUserRole() === Role.ROLE_RECRUTER_ADMIN;
    }

}
