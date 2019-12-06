import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';

import { ToDo } from './../../shared/models/toDo';
import { AuthService } from './auth.service';
import { EntityService } from './entity.service';
import { Quiz } from 'src/app/shared/models/quiz';
import { UserQuizzes } from 'src/app/shared/models/userQuiz';

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


    public getAllToDo(userId: number): Observable<Array<ToDo>> {
        return this.httpClient.get<Array<ToDo>>(`${this.apiUrl}/${this.endpoint}/${userId}/todo`);
    }

    public createToDo(userId: number, entity: ToDo): Observable<Array<ToDo>> {
        return this.httpClient.put<Array<ToDo>>(`${this.apiUrl}/${this.endpoint}/${userId}/todo/add`, entity);
    }

    public removeToDo(userId: number, id: number): Observable<Array<ToDo>> {
        return this.httpClient.delete<Array<ToDo>>(`${this.apiUrl}/${this.endpoint}/${userId}/todo/${id}/remove`);
    }

    public getUserDashboard(userId: number): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}/${this.endpoint}/${userId}/dashboard`);
    }

    public getUserForms(userId: number): Observable<UserQuizzes> {
        return this.httpClient.get<UserQuizzes>(`${this.apiUrl}/${this.endpoint}/${userId}/forms`);
    }

    public activateUser(userId: number): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/${this.endpoint}/${userId}/activate`, null);
    }
}
