import { Entity } from './entity';
import { Address } from './address';
import { Rate } from './rate';
import { Job } from './job';

/**
 * Class representing the company model.
 */
export class Company extends Entity {
    name: string;
    description: string;
    address: Address;
    rates: Array<Rate>
    jobs: Array<Job>
}
