import { Component, Input, OnChanges } from '@angular/core';
import { UserQuiz } from 'src/app/shared/models/userQuiz';
import { Quiz } from 'src/app/shared/models/quiz';
import { element } from '@angular/core/src/render3';
import { QuizService } from 'src/app/core/services/quiz.service';
import { Utils } from 'src/app/shared/utils/utils';

declare const $: any;

@Component({
    selector: 'app-answers-modal',
    templateUrl: './answers-modal.component.html',
    styleUrls: ['./answers-modal.component.scss']
})
export class AnswersModalComponent implements OnChanges {

    @Input() userQuiz: UserQuiz;
    @Input() quiz: Quiz;
    constructor(private quizService: QuizService, private utils: Utils) {
        this.userQuiz = new UserQuiz();
        this.quiz = new Quiz();
    }

    ngOnChanges() {
    }

    public answers() {
        const questions = this.utils.objectToMap(this.quiz.questions);
        const answers = this.utils.objectToMap(this.userQuiz.answers);
        let result: Map<string, string>;
        result = new Map();
        questions.forEach((questionValue, questionKey) => {
            // console.log(questionKey);
            answers.forEach((answersValue, answersKey) => {
                // console.log(questionKey);
                if (questionKey === answersKey) {
                    result.set(questionValue, answersValue);
                }

            });

        });

        return result;
    }

    public onSubmit() {
        this.userQuiz.userFormID = this.userQuiz.id;
        this.userQuiz.formId = this.quiz.id;
        this.userQuiz.userId = this.userQuiz.user.id;

        this.quizService.updateAnswers(1, this.userQuiz).subscribe(
            (response) => {
                $('#answerModal').modal('hide');
            },
            (error) => {
                console.error(error);
            }
        );
    }
}
