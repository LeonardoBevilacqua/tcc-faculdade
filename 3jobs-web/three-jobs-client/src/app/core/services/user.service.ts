import { ToDo } from './../../shared/models/toDo';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';

import { EntityService } from './entity.service';
import { Observable } from 'rxjs';

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
}