import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Quiz, Question } from 'src/app/shared/models/quiz';
import { QuizService } from 'src/app/core/services/quiz.service';
import { ToastrService } from 'ngx-toastr';
import { MaintainForm } from 'src/app/shared/form/maintain-form';
import { Job } from 'src/app/shared/models/job';

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

    constructor(private quizService: QuizService) {
        this.question = new Question();
        this.quiz = new Quiz();
        this.questions = new Map<number, string>();
        this.job = new Job();
    }

    ngOnChanges() {
        this.getQuiz();
    }

    private objectToMap(obj: any) {
        const mp = new Map();
        if (obj !== null && obj) {
            Object.keys(obj).forEach(k => mp.set(k, obj[k]));
        }
        return mp;
    }

    private mapToObject(map: Map<number, string>) {
        const obj = {};
        map.forEach((v, k) => obj[k] = v);
        return obj;
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
            if (this.job.forms.length > 0) {
                this.quiz = this.job.forms[0];
            }
            else {
                this.question = new Question();
                this.quiz = new Quiz();
            }

            this.questions = this.objectToMap(this.quiz.questions);
        }

    }

    public onSubmit() {

        if (this.quiz.id && this.quiz.id > 0) {
            console.log("entrei aquiiiiiiiiiiiiiiiii");

            this.quizService.updateAnswers(this.quiz.id).subscribe(
                (response: any) => {
                    // console.log(response);
                    //  this.subject.emit();
                    $('#quizModal').modal('hide');
                    // this.toastr.success(response.message ? response.message : 'Informações salvas com sucesso!');
                },
                (error) => {
                    //this.errorHandler(error);
                    console.log(error);
                }
            );
        }
        else {
            this.quiz.questions = this.mapToObject(this.questions);
            this.quizService.saveQuiz(this.job.id, this.quiz).subscribe(
                (response: any) => {
                    // console.log(response);
                    //  this.subject.emit();
                    $('#quizModal').modal('hide');
                    // this.toastr.success(response.message ? response.message : 'Informações salvas com sucesso!');
                },
                (error) => {
                    //this.errorHandler(error);
                    //console.log(error);
                }
            );
        }
    }

}
