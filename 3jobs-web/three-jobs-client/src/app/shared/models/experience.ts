import { Entity } from './entity';
import { ExperienceType } from './enums/experience-type.enum';

/**
 * Class representing the experience model.
 */
export class Experience extends Entity {
    location: string;
    description: string;
    beginDate: Date;
    endDate: Date;
    type: ExperienceType;
}
