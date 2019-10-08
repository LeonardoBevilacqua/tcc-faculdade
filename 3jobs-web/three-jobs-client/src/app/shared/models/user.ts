import { Entity } from './entity';
import { Profile } from './profile';
import { Role } from './enums/role.enum';
import { Job } from './job';
import { Company } from './company';

/**
 * Class representing the user model.
 */
export class User extends Entity {
    cpf: string;
    email: string;
    password: string;
    profile: Profile;
    jobs: Array<Job>;
    roles: Array<any>;
    toDo: Array<any>;
    company: Company;
}
