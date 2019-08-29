import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';

import { EntityService } from './entity.service';

/**
 * Service responsible to handle the user.
 */
@Injectable()
export class UserService extends EntityService<User> {
    /**
     * Default constructor;
     * 
     * @param http the http client injectable
     */
    constructor(http: HttpClient) {
        super(http, 'users');
    }
}