import { Civilite } from './common.model';
import { Clinique } from './clinique.model';


export interface Collaborateur{
  civilite: Civilite;
  nom: string;
  prenom: string;
  emailpro: string;
  fonction: string;
  admin: boolean;
  specialite?: string;
  clinique?: Clinique;
}
