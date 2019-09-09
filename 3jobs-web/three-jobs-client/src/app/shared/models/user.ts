import { Entity } from './entity';
import { Profile } from './profile';

/**
 * Class representing the user model.
 */
export class User extends Entity {
    cpf: string;
    email: string;
    password: string;
    profile: Profile;
    roles: Array<string>;
}
