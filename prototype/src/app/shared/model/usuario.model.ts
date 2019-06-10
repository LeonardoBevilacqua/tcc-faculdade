import { Roles } from './enum/roles.enum';
import { Resource } from '../resource';

export class Usuario extends Resource {
    name: string;
    lastname: string;
    city: string;
    email: string;
    password: string;
    roles: Roles;
}
