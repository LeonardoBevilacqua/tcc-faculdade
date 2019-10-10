import { Entity } from './entity';
import { Job } from './job';
import { Profile } from './profile';

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
    companyId: number;
}
