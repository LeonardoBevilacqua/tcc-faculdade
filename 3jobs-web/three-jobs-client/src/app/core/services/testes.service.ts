import { Injectable } from '@angular/core';
import { EntityService } from './entity.service';
import { Testes } from 'src/app/shared/models/testes';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestesService extends EntityService<Testes> {

  constructor(http: HttpClient) {
      super(http, 'testes');
   }
}
