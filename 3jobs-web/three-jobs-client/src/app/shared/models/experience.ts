import { Entity } from './entity';

/**
 * Class representing the experience model.
 */
export class Experience extends Entity {
    location: string;
    description: string;
    type: string;
    beginDate: Date;
    endDate: Date;
}
