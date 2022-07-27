export interface AuthPayload{
  vetName: string;
  emailPro: string;
  motdepasse: string;
}

export interface CurrentUser {
  token:string;
  data: {
    adresse:string;
    vetref:string;
    tel:string;
    nom:string;
    emailpro: string;
    fonction:string;
    cliniqueref:string;
    admin:true;
  }

}
