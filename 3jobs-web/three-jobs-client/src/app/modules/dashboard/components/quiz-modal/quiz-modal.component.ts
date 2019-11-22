import { Component, OnInit } from '@angular/core';
import { Quiz, Question } from 'src/app/shared/models/quiz';

declare const $: any;

@Component({
    selector: 'app-quiz-modal',
    templateUrl: './quiz-modal.component.html',
    styleUrls: ['./quiz-modal.component.scss']
})
export class QuizModalComponent implements OnInit {

    quiz: Quiz;
    question: Question;

    constructor() {
        this.question = new Question();
        this.quiz = new Quiz();
    }

    ngOnInit() {
        console.log('asdasda');
        this.quiz.name = 'Primeiro Quiz';
        this.quiz.description = 'essas perguntas blablabla';
        this.quiz.questions = [{
            id: 1,
            name: 'teste'
        },
        {
            id: 2,
            name: 'marcelo'
        },
        {
            id: 3,
            name: 'kkkkk'
        }];

        $('#quizModal').modal('show');
    }

    public addQuestion() {
        if (this.question != null && this.question.name != null && this.question.name !== '') {
            this.quiz.questions.push(this.question);
            this.question = new Question();
        }
    }

    public editQuestion(index: any) {
        this.question = this.quiz.questions[index];
    }

    public removeQuestion(index: any) {
        this.quiz.questions.splice(index, 1);
    }

    public closeModal() {
        this.quiz = new Quiz();
        this.quiz.questions = new Array();
        this.question = new Question();
    }

    public onSubmit() {
        console.log('2wewer');
    }

}
