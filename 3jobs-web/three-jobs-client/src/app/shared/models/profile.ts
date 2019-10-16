import { Address } from './address';
import { Entity } from './entity';
import { Experience } from './experience';
import { Rate } from './rate';
import { Skill } from './skill';
import { Tag } from './tag';

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
    skills: Array<Skill>;
    experiences: Array<Experience>;
    address: Address;
    rates: Array<Rate>;
    tags: Array<Tag>;
}
