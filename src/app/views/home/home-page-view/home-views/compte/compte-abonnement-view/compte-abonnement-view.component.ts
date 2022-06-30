import { Component, OnInit } from '@angular/core';
import { Veterinaire, CoordonneeBancaire, CoordonneeBancaireItem } from '../../../../../../models/veterinaire.model';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { Abonnement } from '../../../../../../models/abonnement.model';
import { DatePipe } from '@angular/common';
import { UserService } from '../../../../../../services/user/user.service';
import { VeterinaireService } from '../../../../../../services/veterinaire/veterinaire.service';
import { CurrentUser } from '../../../../../../models/user.model';

import { UpdatePayload } from '../../../../../../models/common.model';
import { AbonnementService } from '../../../../../../services/abonnement/abonnement.service';
import { AbonnementReactivationAlertComponent } from '../../../../../../components/abonnement/abonnement-reactivation-alert/abonnement-reactivation-alert.component';
import { MatDialog } from '@angular/material/dialog';
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
  gestionCompte!: ModelGestion<Veterinaire>;

  constructor(public dialog: MatDialog,
    private userService: UserService,
    private vetService: VeterinaireService,
    private abonnementService: AbonnementService
    ) { }

  ngOnInit(): void {

    this.userService.get().then((val: CurrentUser) => {
      this.user = val;
    });

    this.vetService.get().subscribe((v:Veterinaire) => {
      if(this.user && v){
        this.vet = v;
        const c = new CoordonneeBancaire();
        this.coord_banq = this.vet.coordBanq || this.vet.coordBanq===''?c.parse(this.vet.coordBanq, true):this.coord_banq;
        this.gestionCompte ={ mode:'consultation', model:this.vet}
      }
    });

    this.abonnementService.get().subscribe((arg: Abonnement) => {
      if(arg) this.subscription = arg;
      console.log(this.subscription);
    });

  }

  /**Compte */

  suprression(){
    this.dialog.open(CompteSuppressionAlertComponent, {
      data: {
        abonnement: this.subscription,
        coord_banq: this.coord_banq
      }
    });
  }

  /**Abonnement */
  status():string{
    if(this.isNotExpired()){
      return this.subscription.actif?'En cours':'Interrompu';
    }else{
      return "Inactif";
    }
  }
  isNotExpired(): boolean{
    const today = new Date();
    const end =  new Date(this.subscription.dateendsub);
    return end.getTime() > today.getTime();
  }
  activer(){
    console.log('non')
    const p:UpdatePayload = {payload:{actif:true}};
    this.abonnementService.update(p);
  }
  desactiver(){
    console.log('oui')
    const p:UpdatePayload = {payload:{actif:false}};
    this.abonnementService.update(p);
  }
  reactiver(){
    this.dialog.open(AbonnementReactivationAlertComponent, {
      data: {
        abonnement: this.subscription,
        coord_banq: this.coord_banq
      }
    });
  }
}
