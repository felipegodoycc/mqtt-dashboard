import { Medicion } from '../models/medicion.model';

export class MedicionDTO {
    ok: Boolean
    items: Medicion[]
    total: Number
}