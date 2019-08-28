import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EntityService } from './entity.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';

@Injectable()
export class AuthService extends EntityService<User>{

    public token: string;

    constructor(httpClient: HttpClient) {
        super(httpClient, "user");
    }

    public signIn(user: User): Observable<boolean> {
        return this.httpClient.post(`${this.apiUrl}/${this.endpoint}`, { user: user.email, password: user.password })
        .pipe(map((response: any) => {
            // login successful if there's a jwt token in the response
            let token = response && response.token;
            if(token) {
                // set token property
                this.token = token;

                // store email and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify({email: user.email, token: token}));

                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }));
    }
}
