import { Injectable } from '@angular/core';
import { EntityService } from './entity.service';
import { Profile } from 'src/app/shared/models/profile';
import { HttpClient } from '@angular/common/http';

/**
 * Service responsible to handle the profile.
 */
@Injectable()
export class ProfileService extends EntityService<Profile> {

  constructor(http: HttpClient) {
      super(http, 'profiles');
   }
}
