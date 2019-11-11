import { Profile } from 'src/app/shared/models/profile';
import { Entity } from './entity';
import { Score } from './score';

export class JobDashboard extends Entity {
    cities: Map<String, Number>;
    headhunter: Profile;
    jobUsers: Array<Profile>;
    usersScore: Array<Score>;
}