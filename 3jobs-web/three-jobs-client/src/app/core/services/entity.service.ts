import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from 'src/app/shared/models/entity';
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

@Injectable()
/**
 * The base of services.
 */
export class EntityService<E extends Entity>{
    /**
     * the environment API url.
     */
    private apiUrl: string;
    /**
     * 
     * @param httpClient the http client to handle the requests.
     * @param url 
     * @param endpoint the endpoint of the API.
     */
    constructor(private httpClient: HttpClient, private endpoint: string) {
        // initialize variables.
        this.apiUrl = environment.apiUrl;
    }

    /**
     * Post a entity.
     * @param entity entity that will be posted.
     */
    public create(entity: E): Observable<E> {
        return this.httpClient.post<E>(`${this.apiUrl}/${this.endpoint}`, entity, httpOptions);
    }

    /**
     * get a entity by id.
     * @param id the id of the entity.
     */
    public read(id: number): Observable<E> {
        return this.httpClient.get<E>(`${this.apiUrl}/${this.endpoint}/${id}`);
    }

    /**
     * Post a entity.
     * @param entity entity that will be updated.
     */
    public update(entity: E): Observable<E> {
        return this.httpClient.put<E>(`${this.apiUrl}/${this.endpoint}/${entity.id}`, entity, httpOptions);
    }

    /**
     * Delete a entity by id.
     * @param id he id of the entity.
     */
    public delete(id: number): Observable<E> {
        return this.httpClient.delete<E>(`${this.apiUrl}/${this.endpoint}/${id}`);
    }
}
