
export interface Abonnement {
  subscriptionid: string;
  type: string;
  datestartsub: Date;
  dateendsub: Date ;
  vetref?: string;
  actif: boolean;
}
