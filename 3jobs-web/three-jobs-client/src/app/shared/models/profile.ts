import { Entity } from './entity';
import { Address } from './address';

/**
 * Class representing the profile model.
 */
export class Profile extends Entity {
    name: string;
    lastname: string;
    cellphone: string;
    phone: string;
    dateOfBirth: Date;
    martialSatus: string;
    nationality: string;
    address: Address;
}
