
export interface Prestation {
  prestaid:string;
  service:string;
  prix:number;
  animaux:string;
  vetref:string;
}

export const PRESTA_SERVICISES = [
  'consultation générale', 'vaccination', 'radiographie', 'échographie',
    'nutrition', 'chirurgie', 'hospitalisation', 'analyses sanguines',
    'dentisterie', 'évaluation comportemental'
  ];
