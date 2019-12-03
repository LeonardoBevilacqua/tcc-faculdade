import { Entity } from './entity';
import { User } from './user';
import { Quiz } from './quiz';

export class UserQuiz extends Entity {
    formId: number;
    quizId: number;
    userId: number;
    answers: {};
    grades: Array<{ id: number; grate: string }>;
    finalGrade: number;
    userFormID: number;
    user: User;
}


export class UserQuizzes {
    answered: Array<Quiz>;
    notAnswered: Array<Quiz>;
}