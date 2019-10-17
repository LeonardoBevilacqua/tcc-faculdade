import { Profile } from 'src/app/shared/models/profile';
import { Job } from 'src/app/shared/models/job';
import { Entity } from 'src/app/shared/models/entity';

export class Score extends Entity {
    review: string;
    value: number;
    job: Job;
    profile: Profile
}