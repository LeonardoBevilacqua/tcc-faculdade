import { Entity } from './entity';
import { User } from './user';

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
