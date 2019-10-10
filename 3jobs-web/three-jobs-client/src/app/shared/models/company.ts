import { Address } from './address';
import { Entity } from './entity';
import { Job } from './job';
import { Rate } from './rate';

/**
 * Class representing the company model.
 */
export class Company extends Entity {
    name: string;
    description: string;
    address: Address;
    rates: Array<Rate>;
    jobs: Array<Job>;
}
