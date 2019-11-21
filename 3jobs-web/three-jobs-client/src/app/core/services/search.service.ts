import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private jobs = new BehaviorSubject<any>({});
    private valueSearch = new BehaviorSubject<string>('');
    private allow = new BehaviorSubject<boolean>(false);

    currentJobs = this.jobs.asObservable();
    currentValueSearch = this.valueSearch.asObservable();

    constructor() { }

    changeJobs(jobs: any) {
        this.jobs.next(jobs)
    }

    changeSearch(valueSearch: string) {
        this.valueSearch.next(valueSearch)
    }

    changeS(allow: boolean) {
        this.allow.next(allow)
    }
    tt() {
        return this.allow.value
    }
}
