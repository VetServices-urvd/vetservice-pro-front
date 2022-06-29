
export interface Abonnement {
  subscriptionid: string;
  type: string;
  datestartsub: Date | string;
  dateendsub: Date | string;
  vetref?: string;
  actif: boolean;
}
