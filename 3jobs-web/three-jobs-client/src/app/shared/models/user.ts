import { Entity } from './entity';
import { Profile } from './profile';
import { Role } from './enums/role.enum';

/**
 * Class representing the user model.
 */
export class User extends Entity {
    cpf: string;
    email: string;
    password: string;
    profile: Profile;
    roles: Array<Role>;
}
