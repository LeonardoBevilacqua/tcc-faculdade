import { Entity } from './entity';
import { Address } from './address';
import { User } from './user';
import { Tag } from './tag';
import { Experience } from './experience';
import { Skill } from './skill';
import { Rate } from './rate';

/**
 * Class representing the profile model.
 */
export class Profile extends Entity {
    name: string;
    lastName: string;
    cellphone: string;
    phone: string;
    dateOfBirth: Date;
    maritalStatus: string;
    nationality: string;
    skills: Array<Skill>
    experiences: Array<Experience>;
    address: Address;
    rates: Array<Rate>;
    tags: Array<Tag>;
}
