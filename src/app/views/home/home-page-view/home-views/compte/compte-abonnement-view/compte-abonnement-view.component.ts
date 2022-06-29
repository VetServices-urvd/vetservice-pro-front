import { Component, OnInit } from '@angular/core';
import { Veterinaire, CoordonneeBancaire, CoordonneeBancaireItem } from '../../../../../../models/veterinaire.model';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { Abonnement } from '../../../../../../models/abonnement.model';

@Component({
  selector: 'app-compte-abonnement-view',
  templateUrl: './compte-abonnement-view.component.html',
  styleUrls: ['./compte-abonnement-view.component.scss']
})
export class CompteAbonnementViewComponent implements OnInit {
  title = "Compte et abonnement";
  vet: Veterinaire = <Veterinaire>{};
  user: Collaborateur = <Collaborateur>{};
  subscription: Abonnement = <Abonnement>{};
  coord_banq: CoordonneeBancaireItem = <CoordonneeBancaireItem>{};
  constructor() { }

  ngOnInit(): void {
    this.vet = { vetid:'idv1', nom:'Medicalnimal', emailSociete: 'medicalnimal.info@outlook.fr', numsociete: '123654789',
       coordBanq:'medicalnimal.FR4310096000701126137612Y48.SOGEFRPP'};
    this.subscription = {subscriptionid:"idab1", type:"mensuel", datestartsub: '29/06/2021', dateendsub: '29/06/2022', actif:true};
    const c = new CoordonneeBancaire();
    this.coord_banq = this.vet.coordBanq || this.vet.coordBanq===''?c.parse(this.vet.coordBanq, true):this.coord_banq;
  }

}
