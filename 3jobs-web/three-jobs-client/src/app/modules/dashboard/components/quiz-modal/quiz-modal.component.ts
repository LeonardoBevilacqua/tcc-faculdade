import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-quiz-modal',
    templateUrl: './quiz-modal.component.html',
    styleUrls: ['./quiz-modal.component.scss']
})
export class QuizModalComponent implements OnInit {
    quizzes: Array<any>;

    constructor() {
        this.quizzes = [];
    }

    ngOnInit() {
        this.quizzes = [1, 2, 3, 4, 6, 8, 7, 9, 7];
        $('#quizModal').modal('show');
    }

}
