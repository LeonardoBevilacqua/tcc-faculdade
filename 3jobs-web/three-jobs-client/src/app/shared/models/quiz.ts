import { Entity } from './entity';
import { User } from './user';
import { UserQuiz } from './userQuiz';

export class Quiz extends Entity {
    name: string;
    description: string;
    questions: {};
    users: Array<UserQuiz>;
}

export class Question extends Entity {
    name: string;
}

