import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DirectAccessUrlService {

    constructor() { }

    private allow = new BehaviorSubject<boolean>(false);

    setAllow(allow: boolean) {
        this.allow.next(allow)
    }
    getAllow() {
        return this.allow.value
    }
}
