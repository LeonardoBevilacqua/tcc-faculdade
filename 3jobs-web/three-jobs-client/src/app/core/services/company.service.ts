import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/shared/models/company';

import { EntityService } from './entity.service';

@Injectable()
export class CompanyService extends EntityService<Company> {

    constructor(http: HttpClient) {
        super(http, 'companies');
    }
}
