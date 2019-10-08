import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../models/enums/role.enum';

@Pipe({ name: 'roleValue' })
export class RoleValuePipe implements PipeTransform {

    transform(role: Role): any {
        switch (role) {
            case Role.ADMIN:
                return [0];
            case Role.HEADHUNTER:
                return [1];
            case Role.CANDIDATE:
                return [2];
            case Role.RECRUTER_ADMIN:
                return [3];
            case Role.RECRUTER:
                return [4];
        }
    }

}
