  
import { HttpClient, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';

import { EntityService } from './entity.service';
import { Role } from 'src/app/shared/models/enums/role.enum';

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
        ).pipe(map((response) => {
            // login successful if there's a jwt token in the response header
            const token = response && response.headers.get('Authorization');
            if (token) {
                // store email and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('userToken', JSON.stringify({ email: user.email, token }));

                // store user
                localStorage.setItem('user', JSON.stringify({ user: response.body }));

                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }));
    }

    public logout() {
        localStorage.clear();
    }

    public getToken() {
        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return userToken != null ? userToken.token : null;
    }

    public getUserRole() {
        const localStorageUser = JSON.parse(localStorage.getItem('user'));
        const user: User = localStorageUser ? localStorageUser.user : new User();

        return user.roles ? user.roles[0] : null;
    }


    public getUserId() {
        const localStorageUser = JSON.parse(localStorage.getItem('user'));
        
        return localStorageUser != null ? localStorageUser.user.id : null;
    }
    
}
