import { Company } from './company';
import { Entity } from './entity';
import { Tag } from './tag';
import { User } from './user';
import { Quiz } from './quiz';

/**
 * Class representing the job model.
 */
export class Job extends Entity {
    title: string;
    description: string;
    jobRole: string;
    requirement: string;
    salaryValue: number;
    benefit: string;
    beginDate: Date;
    endDate: Date;
    users: Array<User>;
    headhunter: User;
    recruter: User;
    company: Company;
    tags: Array<Tag>;
    status: string;
    forms: Array<Quiz>;
}
