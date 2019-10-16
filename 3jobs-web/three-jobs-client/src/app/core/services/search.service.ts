import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private jobs = new BehaviorSubject<Object>({});
    private valueSearch = new BehaviorSubject<string>('');

    currentJobs = this.jobs.asObservable();
    currentValueSearch = this.valueSearch.asObservable();

    constructor() { }

    changeJobs(jobs: Object) {
        this.jobs.next(jobs)
    }

    changeSearch(valueSearch: string) {
        this.valueSearch.next(valueSearch)
    }
}
