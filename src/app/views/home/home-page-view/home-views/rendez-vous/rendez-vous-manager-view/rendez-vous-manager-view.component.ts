import { Component, OnInit, DoCheck } from '@angular/core';
import { RdvItem } from '../../../../../../models/rendez-vous.model';
import { PRESTA_SERVICISES } from '../../../../../../models/prestation.model';
import { Observable } from 'rxjs';
import { UserService } from '../../../../../../services/user/user.service';
import { CliniqueService } from '../../../../../../services/clinique/clinique.service';
import { CurrentUser } from '../../../../../../models/user.model';
import { Clinique, Disponibilites, DisponibiliteItem } from '../../../../../../models/clinique.model';
import { LoadingViewModel } from '../../../../../default-view/loader-view/loader-view.component';
import { CollaborateurService } from '../../../../../../services/collaborateur/collaborateur.service';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { ClientService } from '../../../../../../services/clients/client.service';
import { Client } from '../../../../../../models/client.model';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AjoutClientAlertComponent } from '../../../../../../components/client/ajout-client-alert/ajout-client-alert.component';
import { RdvManagerService } from '../../../../../../services/collaborateur/rendez-vous/rdv-manager.service';

@Component({
  selector: 'app-rendez-vous-manager-view',
  templateUrl: './rendez-vous-manager-view.component.html',
  styleUrls: ['./rendez-vous-manager-view.component.scss']
})
export class RendezVousManagerViewComponent implements OnInit, LoadingViewModel {
  data_load!:boolean;
  title = 'Gestion de vos agenda';
  subtitle = "Vous pourrez consulter votre agenda, mettre à jour votre agenda en ajoutant des rendez-vous \
              avec vos client, ajouter des absences ou creer un type d'evenement.";
  agenda_items_types:any = [];
  rdv_prestations:string[] = [];
  new_agenda_item:RdvItem = <RdvItem>{};


  today = new Date();
  minDate!:any;
  maxDate!:any;
  chosenDate = new Date();

  clinique_dispos: DisponibiliteItem[] = [];
  currentUser: CurrentUser = <CurrentUser>{};
  collab_doctors:string[] = [];
  client_names:string[] = [];
  constructor(public dialog: MatDialog,
    private userService: UserService,
    private cliniqueService: CliniqueService,
    private collaborateurService: CollaborateurService,
    private clientService: ClientService,
    private rdvService: RdvManagerService) { }

  ngOnInit(): void {
    this.data_load = false;
    this.agenda_items_types = ['RDV', 'Absence', 'Evenement'];
    this.rdv_prestations = PRESTA_SERVICISES;
    this.minDate = new Date(this.today.getFullYear(), this.today.getMonth(),
    this.today.getDate(), 8, 0, 0);
    this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(),
    this.today.getDate(), 19, 30, 0);

    this.currentUser = this.userService.current();
    this.cliniqueService.getAll({value:this.currentUser.data.emailpro, query:'email'})
      .subscribe((results:Clinique[]) => {
        if(results && results.length > 0) {
          //const dispo_str = results[0].disponibilite;
          const dispo = new Disponibilites();
          this.clinique_dispos = dispo.parse(results[0].disponibilite);
          const hour = Number(this.clinique_dispos[0].hDebut.split(':')[0]);
          const minute = Number(this.clinique_dispos[0].hDebut.split(':')[1]);
        }
      });
    if( this.currentUser &&  this.currentUser.data.fonction !== 'Docteur' ){
      this.collaborateurService.getAll({search:{value:'Docteur', query:'fonction'}})
        .subscribe((collabs_res:Collaborateur[]) =>{
          this.collab_doctors = collabs_res
          .filter(c => c.fonction == 'Docteur')
          .map(c => 'Dr ' + c.nom + ' ' + c.prenom);
        });
    }
    this.clientService.getAll()
    .subscribe((cls:Client[]) => {
      this.client_names = cls
        .map(c =>  c.nom + ' ' + c.prenom);
    });
    this.data_load = true;

  }

  // ngDoCheck():void {
  // }
  new_client() {
    this.dialog.open(AjoutClientAlertComponent, {
      height: "50%",
      width: "60%",
      data: {
        mode: 'creation'
      }
    });
  }

  addRdv(){
    //TODO service to create rdv
    // this.rdvService.pu
  }

  select(event:Date, type: "date" | "hour") {
    if(type == "date") {
      console.log("date only: " + event);
      this.chosenDate = event;
    } else {
      this.chosenDate = new Date( this.new_agenda_item.datetime.getFullYear(),
      this.new_agenda_item.datetime.getMonth(),
      this.new_agenda_item.datetime.getDate(),
      event.getHours(),event.getMinutes(), event.getSeconds());

      console.log("date with hour only: " + this.chosenDate);
    }
  }

}
