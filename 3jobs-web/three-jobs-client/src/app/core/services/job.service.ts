import { JobDashboard } from './../../shared/models/jobDashboard';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EntityService } from './entity.service';
import { Job } from 'src/app/shared/models/job';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Service responsible to handle the profile.
 */
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable()
export class JobService extends EntityService<Job> {

    constructor(http: HttpClient) {
        super(http, 'jobs');
    }

    public getAll(): Observable<any> {
        return this.httpClient.get<any>(`${this.apiUrl}/${this.endpoint}/`);
    }

    public register(idUser: number, idJob: number): Observable<Job> {
        return this.httpClient.put<Job>(`${this.apiUrl}/${this.endpoint}/${idJob}/register/${idUser}`, httpOptions);
    }
    public search(description: string, page = 0, size = 10) {
        return this.httpClient.get(`${this.apiUrl}/${this.endpoint}?description=${description}&page=${page}&size=${size}`);
    }

    public getJobDashborad(id: number): Observable<JobDashboard> {
        return this.httpClient.get<JobDashboard>(`${this.apiUrl}/${this.endpoint}/${id}/dashboard`);
    }
}