import { Entity } from './entity';
import { Job } from './job';
import { Profile } from './profile';

/**
 * Class representing the tag model.
 */
export class Tag extends Entity{
    description: string;
    type: string;
    jobs: Array<Job>;
    profiles: Array<Profile>;
}
