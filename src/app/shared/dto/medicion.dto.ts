import { Medicion } from '../models/medicion.model';

export class MedicionDTO {
    ok: boolean;
    items: Medicion[];
    total: number;
}

export class MedicionesPorHoraDTO {
  ok: boolean;
  items: MedicionPorHora[];
}

export class MedicionPorHora {
  _id: string;
  values: Values[];
  minValue: number;
  maxValue: number;
}

class Values {
  value: number;
  hora: number;
}
