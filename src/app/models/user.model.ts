export interface AuthPayload{
  vetName: string;
  emailPro: string;
  motdepasse: string;
}

export interface CurrentUser {
  token:string;
  data: {
    cliniqueid:string;
    adresse:string;
    vetref:string;
    //collaborateurid:string;
    nom:string;
    emailpro: string;
    fonction:string;
    cliniqueref:string;
    admin:true;
  }

}
