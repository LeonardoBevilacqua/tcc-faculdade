import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private jobs = new BehaviorSubject<Array<Object>>([]);
    currentJobs = this.jobs.asObservable();

    constructor() { }

    changeJobs(jobs: Array<Object>){
        this.jobs.next(jobs)
    }
}
