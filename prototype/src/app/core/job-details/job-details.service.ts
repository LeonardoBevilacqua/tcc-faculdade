import { Injectable } from '@angular/core';
import { EntityService } from '../../shared/entity-service.service';
import { HttpClient } from '@angular/common/http';
import { Vaga } from 'src/app/shared/model/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class JobDetailsService extends EntityService<Vaga>{

  constructor(http: HttpClient) { 
    super(http, 'vagas');
  }
}
