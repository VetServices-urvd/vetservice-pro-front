
export interface AgendaItem {
  type: string;
  destinataire: string; //seul: me, autre, plusieurs: docteurs, assistants, secretaire
  raison: string;
  detail: string;
  dateDebut: Date;
  dateFin: Date;
  heureDebut: string;
  heureFin: string;
}
