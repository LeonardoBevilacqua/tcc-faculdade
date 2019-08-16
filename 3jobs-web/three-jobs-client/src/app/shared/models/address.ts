import { Entity } from './entity';

/**
 * Class representing the address model.
 */
export class Address extends Entity {
    zipCode: string;
    state: string;
    city: string;
    district: string;
    name: string;
}
