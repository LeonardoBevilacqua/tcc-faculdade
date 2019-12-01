import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { QuizService } from 'src/app/core/services/quiz.service';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { UserQuiz } from 'src/app/shared/models/userQuiz';
import { JobService } from 'src/app/core/services/job.service';
import { Quiz } from 'src/app/shared/models/quiz';
import { Utils } from 'src/app/shared/utils/utils';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
    public quizAnswered: boolean;
    private jobId: number;
    private formId: number;
    public userQuiz: UserQuiz;
    public quiz: Quiz;
    public questions: Array<{ id: number, name: string, answer: string }>;

    constructor(
        private authService: AuthService,
        private quizService: QuizService,
        private userService: UserService,
        private utils: Utils,
        private router: Router) {

        this.jobId = +this.router.url.split('/')[2];
        this.formId = +this.router.url.split('/')[3];

        this.userQuiz = new UserQuiz();
        this.userQuiz.formId = this.formId;
        const user = this.authService.getUser();
        this.userQuiz.userId = user.id;

        this.quiz = new Quiz();

        this.questions = new Array();
        this.quizAnswered = true;
    }

    ngOnInit() {
        this.userService.getUserForms(this.userQuiz.userId).subscribe(
            (response) => {
                response.forEach(quiz => {
                    if (quiz.id === this.formId) {
                        console.log(quiz.id);

                        this.quizAnswered = false;
                    }
                });

                this.getQuiz();

            },
            (erro) => {
                console.log(erro);

            }
        );

    }

    private getQuiz() {
        this.quizService.getAnswers(this.jobId, this.formId).subscribe(
            (response) => {
                this.quiz = response;
                const mapQuestion = this.utils.objectToMap(this.quiz.questions);
                mapQuestion.forEach((key, value) => {
                    this.questions.push({ id: value, name: key, answer: null });
                });

            },
            (erro) => {
                console.log(erro);

            }
        );
    }

    public onSubmit() {

        const answer = new Map();
        this.questions.forEach(element => {
            answer.set(element.id, element.answer);
        });

        this.userQuiz.answers = this.utils.mapToObject(answer);

        this.quizService.saveAnswers(this.jobId, this.userQuiz).subscribe(
            (response) => {
                this.quizAnswered = true;
            },
            (erro) => {
                console.log(erro);

            }
        );
    }
}
