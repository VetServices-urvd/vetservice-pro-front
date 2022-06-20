import { Civilite, PaiementType } from './common.model';


export interface SuBscriptionPayload {
  veterinaire:{
    nom: string;
    emailSociete: string;
    code_siret: string;
    code_siren: string;
    coordBank: string;
  },
  clinique: {
    adresse: string;
    tel: string;
    disponibilite: string;
  },
  firstCollab: {
    civilite: Civilite;
    nom: string;
    prenom: string;
    emailPro: string;
    fonction: string;
    admin: boolean;
    specialite: string;
    motdepasse: string;
  },
  abonnement: {
    type: PaiementType;
    paiement: boolean;
  }
}
