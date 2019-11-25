import { Score } from './../../../../shared/models/score';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';
import { JobService } from 'src/app/core/services/job.service';
import { Profile } from 'src/app/shared/models/profile';
import { UserQuiz } from 'src/app/shared/models/userQuiz';
import { Quiz } from 'src/app/shared/models/quiz';
import { User } from 'src/app/shared/models/user';

@Component({ selector: 'app-job-dashboard', templateUrl: './job-dashboard.component.html' })
export class JobDashboardComponent implements OnInit {

    private vacancyId: number;
    public headhunter: Profile;
    public ranking: Array<Score>;
    public jobUsers: Array<Profile>;
    private citiesName: Array<string>;
    private citiesValue: Array<number>;
    public userQuiz: UserQuiz;
    private quiz: Quiz;

    BarChartCidades: any;


    constructor(private jobService: JobService, private router: Router) {
        this.vacancyId = +this.router.url.split('/')[3];
        this.ranking = [];
        this.jobUsers = [];
        this.quiz = new Quiz();
        this.userQuiz = new UserQuiz();
    }

    ngOnInit() {
        this.jobService.getJobDashborad(this.vacancyId).subscribe(
            (response) => {
                this.headhunter = response.headhunter;
                this.ranking = response.usersScore ? response.usersScore : [];
                this.jobUsers = response.jobUsers ? response.jobUsers : [];

                this.citiesName = Object.keys(response.cities);
                this.citiesValue = Object.values(response.cities);

                this.createChart();

            },
            (error) => {
                console.error(error);
            }
        );

        this.jobService.read(this.vacancyId).subscribe(
            (response) => {
                // console.log(response.forms);
                this.quiz = response.forms[0];

            },
            (error) => {
                console.error(error);
            }
        );
    }

    private createChart() {
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
                    text: 'Cidade dos Candidatos',
                    display: true
                }
            }
        });
    }

    public editUserQuiz(candidate: User) {

        console.log(candidate.id);
        


        const quiz: UserQuiz = this.quiz.users.find(user => user.user.id === candidate.id);
        this.userQuiz = quiz;

        console.log("TESTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        console.log(this.quiz);
        console.log(quiz);
    }
}
