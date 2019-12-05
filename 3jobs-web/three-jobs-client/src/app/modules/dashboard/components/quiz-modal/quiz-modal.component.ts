import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Quiz, Question } from 'src/app/shared/models/quiz';
import { QuizService } from 'src/app/core/services/quiz.service';
import { ToastrService } from 'ngx-toastr';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Job } from 'src/app/shared/models/job';
import { Utils } from 'src/app/shared/utils/utils';
import { environment } from 'src/environments/environment';

declare const $: any;

@Component({
    selector: 'app-quiz-modal',
    templateUrl: './quiz-modal.component.html',
    styleUrls: ['./quiz-modal.component.scss']
})
export class QuizModalComponent implements OnChanges {

    quiz: Quiz;
    question: Question;
    questions: Map<number, string>;
    @Input() job: Job;

    constructor(private quizService: QuizService, private utils: Utils, private toastr: ToastrService) {
        this.question = new Question();
        this.quiz = new Quiz();
        this.questions = new Map<number, string>();
        this.job = new Job();
    }

    ngOnChanges() {
        this.getQuiz();
    }

    public addQuestion() {
        if (this.question != null && this.question.name != null && this.question.name !== '') {
            let maior = 0;

            this.questions.forEach((value, key) => {
                if (key > maior) {
                    maior = key;
                }
            });
            if (this.question.id == null) {
                this.question.id = maior + 1;
            }

            this.questions.set(this.question.id, this.question.name);
            this.question = new Question();
        }
    }

    public editQuestion(key: number) {
        this.question.id = key;
        this.question.name = this.questions.get(key);
    }

    public removeQuestion(key: number) {
        this.questions.delete(key);
    }

    public closeModal() {
        this.quiz = new Quiz();
        this.questions = new Map();
        this.question = new Question();
    }

    private getQuiz() {
        if (this.job != null && this.job.id > 0) {
            if (this.job.form) {
                this.quiz = this.job.form;
            }
            else {
                this.question = new Question();
                this.quiz = new Quiz();
            }

            this.questions = this.utils.objectToMap(this.quiz.questions);
        }

    }

    public onSubmit() {
        this.quiz.questions = this.utils.mapToObject(this.questions);

        if (this.quiz.id && this.quiz.id > 0) {
            this.quizService.updateQuiz(this.job.id, this.quiz).subscribe(
                (response: any) => {
                    this.toastr.success(response.message ? response.message : 'Informações atualizadas com sucesso!');
                    $('#quizModal').modal('hide');
                },
                (error) => {
                    // if error is set, Show the server message.
                    if (error.error && error.status !== 0) {
                        // set a title to show
                        const title = error.error.title ? error.error.title : `Erro ${error.status}`;
                        // display the warning message
                        this.toastr.warning(error.error.message, title);
                    }
                    // else, show a error message
                    else {
                        this.toastr.error('Tente novamente mais tarde.', 'Falha ao se comunicar com servidor!');
                    }

                    if (!environment.production) {
                        // for debug
                        console.error(error);
                    }
                }
            );
        }
        else {
            this.quizService.saveQuiz(this.job.id, this.quiz).subscribe(
                (response: any) => {
                    this.toastr.success(response.message ? response.message : 'Informações salvas com sucesso!');
                    $('#quizModal').modal('hide');
                },
                (error) => {
                    // if error is set, Show the server message.
                    if (error.error && error.status !== 0) {
                        // set a title to show
                        const title = error.error.title ? error.error.title : `Erro ${error.status}`;
                        // display the warning message
                        this.toastr.warning(error.error.message, title);
                    }
                    // else, show a error message
                    else {
                        this.toastr.error('Tente novamente mais tarde.', 'Falha ao se comunicar com servidor!');
                    }

                    if (!environment.production) {
                        // for debug
                        console.error(error);
                    }
                }
            );
        }
    }

}