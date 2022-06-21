

export type Civilite = 'Mr' | 'Mme' | 'Dr';
export type PaiementType = 'mensuel' | 'annuel';
export type PaiementOption = 'sepa' | 'cb';

export type NavigationVal = 'CONNETION' | 'INSCRIPTION' | 'HOME';

export type StepSubscription = 'ORGANISME' | 'ETABLISSEMENT' | 'COLLABORATEUR' | 'SOUSCRIPTION' | 'END';

export interface SideMenuItem {
  num: number;
  disable: boolean;
  title: string;
  iconName: string;
  selected: boolean;
  endofCategorie?:boolean;
  route?:string;
}
