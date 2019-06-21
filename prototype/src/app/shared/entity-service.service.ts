import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Resource } from './resource';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class EntityService<E extends Resource> {
  private path: string;

  constructor(private http: HttpClient, path: string) { 
    this.path = path;
  }

  getAllEntity(): Observable<E[]> {
    return this.http.get<E[]>(this.path);
  }

  getEntityById(id: number): Observable<E[]> {
    const url = `${this.path}/${id}`;
    return this.http.get<E[]>(url);
  }

  postEntity(entity: E): Observable<E> {
    return this.http.post<E>(this.path, entity, httpOptions);
  }

  putEntity(entity: E): Observable<E> {
    const url = `${this.path}/${entity.id}`;
    return this.http.put<E>(url, entity, httpOptions);
  }

  deleteEntity(id: number): Observable<E> {
    const url = `${this.path}/${id}`;
    return this.http.delete<E>(url, httpOptions);
  }
}
