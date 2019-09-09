import { Company } from './company';
import { Entity } from './entity';
import { Profile } from './profile';

/**
 * Class representing the rate model.
 */
export class Rate extends Entity {
    status: String;
    profile: Profile;
    company: Company;
}
