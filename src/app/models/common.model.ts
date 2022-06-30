import { environment } from '../../environments/environment';


export type Civilite = 'Mr' | 'Mme' | 'Dr';
export type PaiementType = 'mensuel' | 'annuel';
export type PaiementOption = 'sepa' | 'cb';

export type NavigationVal = 'CONNETION' | 'INSCRIPTION' | 'HOME';

export type StepSubscription = 'ORGANISME' | 'ETABLISSEMENT' | 'COLLABORATEUR' | 'SOUSCRIPTION' | 'END';

export type GestionMode = 'consultation' | 'modification' | 'supression' | 'creation';

export interface ModelGestion<T>{
  mode: GestionMode;
  model: T
}
export interface SideMenuItem {
  num: number;
  disable: boolean;
  title: string;
  iconName: string;
  selected: boolean;
  endofCategorie?: boolean;
  route?: string;
}

export const LINKS = {
  collaborateur: 'veterinaire/home/collaborateur',
  clinique: 'veterinaire/home/clinique',
  compte_abonnement: 'veterinaire/home/compte&abonnement'
}
export const MOCK_FILE = '../../assets/mock_data.json'
export function getUrl(path:string) {
  if(!environment.mock_all
    || environment.api_routes.find((r: { path: string; mock: boolean; }) => path.includes(r.path) && r.mock === false)) {
    return environment.api + '/' + path;
  }else{
    return '../../assets/mock_data.json';
  }
}

export interface UpdatePayload {
  payload:any;
}
