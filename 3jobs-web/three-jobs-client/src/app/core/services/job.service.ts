import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EntityService } from './entity.service';
import { Job } from 'src/app/shared/models/job';
import { HttpClient } from '@angular/common/http';

/**
 * Service responsible to handle the profile.
 */
@Injectable()
export class JobService extends EntityService<Job> {

    constructor(http: HttpClient) {
        super(http, 'jobs');
    }

    public getAll(): Observable<any> {
        return this.httpClient.get<any>(`${this.apiUrl}/${this.endpoint}/`);
    }
}