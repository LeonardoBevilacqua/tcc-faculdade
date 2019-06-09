import { Injectable } from '@angular/core';
import { SimpleService } from '../simple-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobDetailsService extends SimpleService{

  constructor(http: HttpClient) { 
    super('vagas', http);
  }
}
