import { Entity } from './entity';
import { Company } from './company';
import { Profile } from './profile';

/**
 * Class representing the user model.
 */
export class User extends Entity {
    cpf: string;
    email: string;
    password: string;
    name: string;   
    profile: Profile;
    roles: Array<string> = [];
    
}
