import { Entity } from './entity';

export class Quiz extends Entity {
    name: string;
    description: string;
    questions: {};
}

export class Question extends Entity {
    name: string;
}

