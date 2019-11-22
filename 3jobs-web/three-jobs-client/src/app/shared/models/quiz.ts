import { Entity } from './entity';

export class Quiz extends Entity {
    name: string;
    description: string;
    questions: Array<Question>;
}

export class Question extends Entity {
    name: string;
}
