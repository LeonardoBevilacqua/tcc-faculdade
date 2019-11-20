import { Entity } from './entity';

export class UserQuiz extends Entity {
    quizId: number;
    userId: number;
    answers: Array<{ id: number; name: string }>;
    grades: Array<{ id: number; grate: string }>;
    finalGrade: number;
    userFormID: number;
}
