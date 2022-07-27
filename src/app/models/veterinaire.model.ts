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

export interface Veterinaire {
  vetid: string;
  nom: string;
  emailsociete: string;
  numsociete: string;
  coordbanq: string;
}
export interface CoordonneeBancaireItem {
  intitule: string;
  iban: string;
  bic: string;
}
export class CoordonneeBancaire {
  intitule: string;
  private _iban: string;
  bic: string;

  get iban(){
    return this._iban;
  }
  set iban(iban:string) {
    this._iban = iban;
  }

  ibanMask(){
    const sample = this._iban.substring(4,this._iban.length - 3);
    //console.log("sample 1 = "+ sample);
    //console.log("sample 2 = "+ sampleMask);
    const iban_str = this._iban.substring(0,4) +
    '*'.repeat(sample.length) +
    this._iban.substring(sample.length + 4);
    //console.log("iban_str = "+ iban_str);
    return iban_str;
  }

  constructor(coordBanq?: CoordonneeBancaireItem){
    if(coordBanq) {
      this.intitule = coordBanq.intitule.toLowerCase();
      this._iban = coordBanq.iban;
      this.bic = coordBanq.bic;
    } else {
      this.intitule = '';
      this._iban = '';
      this.bic = '';
    }
  }

  to_string() {
    return this.intitule + '.' + this.iban + '.' + this.bic;
  }

  parse(coor_banq_str:string, mask:boolean = false):CoordonneeBancaireItem{
    const onesplit = coor_banq_str.split('.');

    this.intitule = onesplit[0];
    this._iban = onesplit[1];
    this.bic = onesplit[2];
    return {intitule:this.intitule, iban:(mask?this.ibanMask():this.iban),
     bic:this.bic};
  }
}
