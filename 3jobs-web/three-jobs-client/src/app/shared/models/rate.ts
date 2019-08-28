import { Entity } from './entity';
import { User } from './user';

/**
 * Class representing the rate model.
 */
export class Rate extends Entity {
    type: string;
    typeId: number;
    rate: number;
    user: User;
    userId: number;
}
