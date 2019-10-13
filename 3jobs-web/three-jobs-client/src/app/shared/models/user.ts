import { Company } from './company';
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
    profileId: number;
    jobs: Array<Job>;
    roles: Array<any>;
    jobsHeadhunter: Array<Job>;
    toDo: Array<any>;
    company: Company;
    companyId: number;
}
