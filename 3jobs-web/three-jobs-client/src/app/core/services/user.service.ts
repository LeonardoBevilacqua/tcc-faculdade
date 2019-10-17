import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';

import { ToDo } from './../../shared/models/toDo';
import { AuthService } from './auth.service';
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
    constructor(http: HttpClient, private authService: AuthService) {
        super(http, 'users');
    }


    public getAllToDo(): Observable<Array<ToDo>> {
        return this.httpClient.get<Array<ToDo>>(`${this.apiUrl}/${this.endpoint}/${this.authService.getUserId()}/todo`);
    }

    public createToDo(entity: ToDo): Observable<Array<ToDo>> {
        return this.httpClient.put<Array<ToDo>>(`${this.apiUrl}/${this.endpoint}/${this.authService.getUserId()}/todo/add`, entity);
    }

    public removeToDo(id: number): Observable<Array<ToDo>> {
        return this.httpClient.delete<Array<ToDo>>(`${this.apiUrl}/${this.endpoint}/${this.authService.getUserId()}/todo/${id}/remove`);
    }

    public getUserDashboard(): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}/${this.endpoint}/${this.authService.getUserId()}/dashboard`);
    }
}
