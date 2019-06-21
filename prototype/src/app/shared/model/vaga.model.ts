import { Resource } from '../resource';

export class Vaga extends Resource {
    nome: string;
    descricao: string;
    beneficios: string;
    dataInicio: Date;
    dataFim: Date;
    cidade: string;
    empresa: string;
    tags: string[];
}
