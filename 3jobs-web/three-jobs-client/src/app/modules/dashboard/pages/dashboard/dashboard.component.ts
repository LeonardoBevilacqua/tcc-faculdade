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
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';

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
        private userService: UserService,
        private spinner: Ng4LoadingSpinnerService,
        private router: Router) {
        this.user = this.authService.getUser();
        this.vacancies = [];
        this.recruiters = [];
        this.processTotal = 0;
        this.awaitingHeadhunter = 0;
        this.totalFinished = 0;
    }

    job: Job;
    ngOnInit() {
        this.loadDataIfUserHasCompanyId();

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

    private getJobByCompanyId() {
        this.spinner.show();
        this.jobService.getJobByCompanyId(this.user.companyId).subscribe(
            (response) => {
                this.vacancies = response;
                this.spinner.hide();
            },
            (error) => {
                console.log(error);
                this.spinner.hide();
            }
        );
    }

    private getJobByHeadhunterId() {
        this.spinner.show();
        this.jobService.getJobByHeadhunterId(this.user.id).subscribe(
            (response) => {
                this.vacancies = response;
                this.spinner.hide();
            },
            (error) => {
                console.log(error);
                this.spinner.hide();
            }
        );
    }

    private getJobByUserId() {
        this.spinner.show();
        this.jobService.getJobByUserId(this.user.id).subscribe(
            (response) => {
                this.vacancies = response;
                this.spinner.hide();
            },
            (error) => {
                console.log(error);
                this.spinner.hide();
            }
        );
    }

    public getJobs() {
        const role = this.authService.getUserRole();

        if (role === Role.ROLE_RECRUTER || role === Role.ROLE_RECRUTER_ADMIN) {
            this.getJobByCompanyId();
        }
        else if (role === Role.ROLE_HEADHUNTER) {
            this.getJobByHeadhunterId();
        }
        else if (role === Role.ROLE_CANDIDATE) {
            this.getJobByUserId();
        }
    }

    private getAllRecruiter() {
        this.spinner.show();
        this.companyService.read(this.user.companyId).subscribe(
            (response) => {
                this.recruiters = response.recruters;
                this.spinner.hide();
            },
            (error) => {
                console.log(error);
                this.spinner.hide();
            }
        );
    }

    private getCardData() {
        this.spinner.show();
        this.userService.getUserDashboard(this.user.id).subscribe(
            (response) => {
                this.processTotal = response.processTotal ? response.processTotal : 0;
                this.awaitingHeadhunter = response.awaitingHeadhunter ? response.awaitingHeadhunter : 0;
                this.totalFinished = response.totalFinished ? response.totalFinished : 0;
                this.spinner.hide();
            }
        );
    }

    private loadDataIfUserHasCompanyId() {
        if (this.user) {
            if (this.authService.getUserRole() === Role.ROLE_RECRUTER_ADMIN && isNullOrUndefined(this.user.companyId)) {
                this.userService.read(this.user.id).subscribe(
                    (response: User) => {
                        if (response.companyId) {
                            this.authService.setUser(response);
                            this.getCardData();
                            this.getJobs();
                            this.getAllRecruiter();
                        }
                        else {
                            this.authService.logout();
                            this.router.navigateByUrl('/');
                        }
                    }
                );
            }
            else {
                this.getCardData();
                this.getJobs();
                this.getAllRecruiter();
            }
        }
        else {
            this.authService.logout();
            this.router.navigateByUrl('/');
        }
    }

    public shouldDisplayRecrutersTable() {
        return this.authService.getUserRole() === Role.ROLE_RECRUTER_ADMIN;
    }

    public shouldDisplayVacancy() {
        return this.authService.getUserRole() === Role.ROLE_RECRUTER || this.authService.getUserRole() === Role.ROLE_RECRUTER_ADMIN;
    }

    public shouldAccessJobDashboard() {
        return this.authService.getUserRole() !== Role.ROLE_CANDIDATE;
    }
}
