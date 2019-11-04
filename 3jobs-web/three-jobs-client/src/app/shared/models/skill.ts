import { Entity } from './entity';
import { Profile } from './profile';

/**
 * Class representing the skill model.
 */
export class Skill extends Entity {
    description: string;
    profiles: Array<Profile>;
}
