import { Component, Input, OnChanges } from '@angular/core';
import { UserQuiz } from 'src/app/shared/models/userQuiz';
import { Quiz } from 'src/app/shared/models/quiz';
import { element } from '@angular/core/src/render3';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
    selector: 'app-answers-modal',
    templateUrl: './answers-modal.component.html',
    styleUrls: ['./answers-modal.component.scss']
})
export class AnswersModalComponent implements OnChanges {

    @Input() userQuiz: UserQuiz;
    @Input() quiz: Quiz;
    constructor(private quizService: QuizService) {
        this.userQuiz = new UserQuiz();
        this.quiz = new Quiz();
    }

    ngOnChanges() {
        // console.log("Dentro do answers");
        // console.log(this.userQuiz);
        // console.log(this.quiz);

    }

    public answers() {
        const questions = this.objectToMap(this.quiz.questions);
        const answers = this.objectToMap(this.userQuiz.answers);
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

    public onSubmit() {
        this.userQuiz.finalGrade = 10;
        this.userQuiz.userFormID = 1;
        this.userQuiz.formId = 63;
        // this.userQuiz.userId = 3;

        this.quizService.updateAnswers(1, this.userQuiz).subscribe(
            (response) => {
                 console.log(response);

            },
            (error) => {
                console.error(error);
            }
        );
    }
}
