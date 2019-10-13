import { Score } from './../../../../shared/models/score';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';
import { JobService } from 'src/app/core/services/job.service';
import { Profile } from 'src/app/shared/models/profile';

@Component({ selector: 'app-job-dashboard', templateUrl: './job-dashboard.component.html' })
export class JobDashboardComponent implements OnInit {

    private vacancyId: number;
    public headhunter: Profile;
    public ranking: Array<Score>;
    public jobUsers: Array<Profile>;
    private citiesName: Array<string>;
    private citiesValue: Array<number>;

    BarChartCidades: any;


    constructor(private jobService: JobService, private router: Router) {
        this.vacancyId = +this.router.url.split('/')[3];
    }

    ngOnInit() {
        this.jobService.getJobDashborad(this.vacancyId).subscribe(
            (response) => {
                this.headhunter = response.headhunter;
                this.ranking = response.usersScore;
                this.jobUsers = response.jobUsers;
                // console.log(this.jobUsers);
                var teste = new Map<string, number>();
                this.citiesName = Object.keys(response.cities);
                this.citiesValue = Object.values(response.cities)

                this.criateGraphic();
            },
            (error) => {
                console.log(error);
            }
        );




        
    }

    private criateGraphic() {
        this.BarChartCidades = new Chart('barChartCidades', {
            type: 'bar',
            data: {
                labels: this.citiesName,
                datasets: [{
                    data: this.citiesValue,
                    borderWidth: 1
                }]

            },
            options: {
                legend: {
                    display: false,
                },
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    text: "Cidade dos Candidatos",
                    display: true
                }
            }
        });
    }
}
