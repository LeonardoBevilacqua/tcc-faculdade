import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class SimpleServiceService {
  private path: string;

  constructor(path: string, private http: HttpClient) { 
    this.path = path;
  }

  getEntity(): Observable<any[]> {
    return this.http.get<any[]>(this.path);
  }

  getEntityById(id: number): Observable<any[]> {
    const url = `${this.path}/${id}`;
    return this.http.get<any[]>(url);
  }

  postEntity(entity: any): Observable<any> {
    return this.http.post<any>(this.path, entity, httpOptions);
  }

  putEntity(id: number, entity: any): Observable<any> {
    const url = `${this.path}/${id}`;
    return this.http.put(url, entity, httpOptions);
  }

  deleteEntity(id: number): Observable<any> {
    const url = `${this.path}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
