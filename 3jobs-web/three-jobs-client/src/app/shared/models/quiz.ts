import { Entity } from './entity';

export class Quiz extends Entity {
    name: string;
    description: string;
    questions: Array<{ id: number; name: string }>;
}
