import { Entity } from './entity';
import { Address } from './address';
import { User } from './user';
import { Tag } from './tag';
import { Experience } from './experience';
import { Skill } from './skill';

/**
 * Class representing the profile model.
 */
export class Profile extends Entity {
    name: string;
    lastName: string;
    cellphone: string;
    phone: string;
    dateOfBirth: Date;
    martialStatus: string;
    nationality: string;
    addressId: number;
    address: Address;
    user: User;
    userId: number;
    tags: Array<Tag>;
    experiences: Array<Experience>;
    skills: Array<Skill>
}
