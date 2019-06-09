import { Roles } from '../enum/roles.enum';

export class Usuario {
    id: number;
    nome: string;
    sobreNome: string;
    cidade: string;
    password: string;
    roles: Roles;
}
