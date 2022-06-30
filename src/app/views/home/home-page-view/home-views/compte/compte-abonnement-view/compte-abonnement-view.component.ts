import { Component, OnInit } from '@angular/core';
import { Veterinaire, CoordonneeBancaire, CoordonneeBancaireItem } from '../../../../../../models/veterinaire.model';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { Abonnement } from '../../../../../../models/abonnement.model';
import { DatePipe } from '@angular/common';
import { UserService } from '../../../../../../services/user/user.service';
import { VeterinaireService } from '../../../../../../services/veterinaire/veterinaire.service';
import { CurrentUser } from '../../../../../../models/user.model';
import { AbonnementService } from '../../../../../../services/abonnement/abonnement.service';
@Component({
  selector: 'app-compte-abonnement-view',
  templateUrl: './compte-abonnement-view.component.html',
  styleUrls: ['./compte-abonnement-view.component.scss']
})
export class CompteAbonnementViewComponent implements OnInit {
  title = "Compte et abonnement";
  vet: Veterinaire = <Veterinaire>{};
  user: CurrentUser = <CurrentUser>{};
  subscription: Abonnement = <Abonnement>{};
  coord_banq: CoordonneeBancaireItem = <CoordonneeBancaireItem>{};

  constructor( private userService: UserService,
    private vetService: VeterinaireService,
    private abonnementService: AbonnementService
    ) { }

  ngOnInit(): void {

    this.subscription = {subscriptionid:"idab1", type:"annuel", datestartsub: new Date(),
      dateendsub: new Date(), actif:true};
    this.userService.get().then((val: CurrentUser) => {
      this.user = val;
    });

    this.vetService.get().subscribe((v:Veterinaire) => {
      if(this.user && v){
        this.vet = v;
        const c = new CoordonneeBancaire();
        this.coord_banq = this.vet.coordBanq || this.vet.coordBanq===''?c.parse(this.vet.coordBanq, true):this.coord_banq;
      }
    });

    this.abonnementService.get().subscribe((arg: Abonnement) => {
      if(arg) this.subscription = arg;
    });

  }

  isNotExpired(): boolean{
    const today = new Date();
    return this.subscription.dateendsub.getTime() > today.getTime();
  }

}
