import { Entity } from './entity';
import { Address } from './address';

/**
 * Class representing the company model.
 */
export class Company extends Entity {
    name: string;
    description: string;
    address: Address;
    addressId: number;
}
