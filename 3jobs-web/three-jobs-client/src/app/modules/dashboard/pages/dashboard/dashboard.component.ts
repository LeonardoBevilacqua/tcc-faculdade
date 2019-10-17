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

    processTotal: number;
    awaitingHeadhunter: number;
    totalFinished: number;

    constructor(
        private authService: AuthService,
        private jobService: JobService,
        private companyService: CompanyService,
        private userService: UserService) {
        this.user = this.authService.getUser();
        this.vacancies = [];
        this.recruiters = [];
        this.processTotal = 0;
        this.awaitingHeadhunter = 0;
        this.totalFinished = 0;
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

    private getCardData() {
        this.userService.getUserDashboard().subscribe(
            (response) => {
                this.processTotal = response.processTotal ? response.processTotal : 0;
                this.awaitingHeadhunter = response.awaitingHeadhunter ? response.awaitingHeadhunter : 0;
                this.totalFinished = response.totalFinished ? response.totalFinished : 0;
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
                    this.getCardData();
                },
                () => {
                    this.authService.logout();
                }
            );
        }
        else {
            this.getAllRecruiter();
            this.getAllVacancies();
            this.getCardData();
        }
    }

    shouldDisplayRecrutersTable() {
        return this.authService.getUserRole() === Role.ROLE_RECRUTER_ADMIN;
    }

}
