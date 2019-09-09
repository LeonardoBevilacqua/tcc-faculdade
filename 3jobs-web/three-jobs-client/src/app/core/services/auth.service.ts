import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';

import { EntityService } from './entity.service';

@Injectable()
export class AuthService extends EntityService<User>{
    /**
     * Default contructor
     *
     * @param httpClient the http client to handle the requests.
     */
    constructor(httpClient: HttpClient) {
        super(httpClient, 'login');
    }

    public login(user: User): Observable<boolean> {
        return this.httpClient.post(
            `${this.apiUrl}/${this.endpoint}`,
            { email: user.email, password: user.password },
            { observe: 'response' }
        )
            .pipe(map((response: HttpResponseBase) => {
                // login successful if there's a jwt token in the response header
                const token = response && response.headers.get('Authorization');
                if (token) {
                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify({ email: user.email, token }));

                    // return true to indicate successful login
                    return true;
                }
                else {
                    // return false to indicate failed login
                    return false;
                }
            }));
    }

    public getToken() {
        const user = JSON.parse(localStorage.getItem('user'));

        return user != null ? user.token : null;
    }
}
