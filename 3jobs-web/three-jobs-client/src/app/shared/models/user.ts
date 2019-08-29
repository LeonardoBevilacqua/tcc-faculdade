import { Entity } from './entity';
import { Company } from './company';

/**
 * Class representing the user model.
 */
export class User extends Entity {
    cpf: string;
    email: string;
    password: string;
    nome: string;
    sobrenome: string;
    rate: string;
    data: string;
}
