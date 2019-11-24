import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/shared/models/quiz';
import { EntityService } from './entity.service';
import { UserQuiz } from 'src/app/shared/models/userQuiz';

/**
 * Service responsible to handle the profile.
 */
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable()
export class QuizService extends EntityService<Quiz> {

    constructor(http: HttpClient) {
        super(http, 'jobs');
    }

    public saveQuiz(jobId: number, entity: Quiz): Observable<Quiz> {
        console.log(entity)
        return this.httpClient.post<Quiz>(`${this.apiUrl}/${this.endpoint}/${jobId}/forms`, entity, httpOptions);
    }

    public updateQuiz(jobId: number, entity: Quiz): Observable<UserQuiz> {
        return this.httpClient.put<UserQuiz>(`${this.apiUrl}/${this.endpoint}/${jobId}/forms`, entity, httpOptions);
    }

    public saveAnswers(jobId: number, entity: UserQuiz): Observable<UserQuiz> {
        return this.httpClient.post<UserQuiz>(`${this.apiUrl}/${this.endpoint}/${jobId}/answers`, entity, httpOptions);

    }

    public updateAnswers(jobId: number): Observable<UserQuiz> {
        return this.httpClient.put<UserQuiz>(`${this.apiUrl}/${this.endpoint}/${jobId}/answers`, httpOptions);
    }

    public getAnswers(jobId: number, quizId: number) {
        return this.httpClient.get<UserQuiz>(`${this.apiUrl}/${this.endpoint}/${jobId}/forms/${quizId}`);
    }
}
