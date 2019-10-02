import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/core/services/job.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Role } from 'src/app/shared/models/enums/role.enum';

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.scss'] })
export class DashboardComponent implements OnInit {

    vacancies: Array<Job>;
    constructor(private authService: AuthService, private jobService: JobService) { }

    job: Job;
    ngOnInit() {

        this.job = new Job();
        this.getAllVacancies();
    }

    public createVacancy() {
        this.job = new Job();
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

    shouldDisplayRecrutersTable() {
        return this.authService.getUserRole() === Role.RECRUTER_ADMIN;
    }

}
