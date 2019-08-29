import { Injectable } from '@angular/core';
import { EntityService } from './entity.service';


import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';

@Injectable({
    providedIn: 'root'
})
export class RegisterService extends EntityService<User>{

    constructor(private http: HttpClient) {
        super(http, 'users');

    }
}