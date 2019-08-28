import { Entity } from './entity';
import { Company } from './company';
import { Profile } from './profile';
import { Tag } from './tag';

/**
 * Class representing the job model.
 */
export class Job extends Entity {
    title: string;
    description: string;
    jobRole: string;
    requirement: string;
    benefit: string;
    beginDate: Date;
    endDate: Date;
    company: Company;
    companyId: number;
    profiles: Array<Profile>;
    tags: Array<Tag>
}
