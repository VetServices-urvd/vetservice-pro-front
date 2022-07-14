import { Component, OnInit, DoCheck } from '@angular/core';
import { AgendaItem } from '../../../../../../models/rendez-vous.model';
import { PRESTA_SERVICISES } from '../../../../../../models/prestation.model';
import { Observable } from 'rxjs';
import { UserService } from '../../../../../../services/user/user.service';
import { CliniqueService } from '../../../../../../services/clinique/clinique.service';
import { CurrentUser } from '../../../../../../models/user.model';
import { Clinique, Disponibilites, DisponibiliteItem } from '../../../../../../models/clinique.model';
import { LoadingViewModel } from '../../../../../default-view/loader-view/loader-view.component';
import { StateStore } from '../../../../../../services/state/state.store';

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
  new_agenda_item:AgendaItem = <AgendaItem>{};
  hDebut!:number;
  hFin!:number;
  agenda_item!:AgendaItem;
  agenda_date!:Date;
  maxDate:number = 1;
  arrHours:number[] = new Array(12);
  today = new Date();
  clinique_dispos: DisponibiliteItem[] = [];
  currentUser: CurrentUser = <CurrentUser>{};
  constructor(private userService: UserService,
    private cliniqueService: CliniqueService, private state: StateStore) { }

  ngOnInit(): void {
    this.data_load = false;
    this.agenda_items_types = ['RDV', 'Absence', 'Evenement'];
    this.rdv_prestations = PRESTA_SERVICISES;
    this.arrHours[0] = 8;
    for(let i = 1; i < 12 ; i++) {
      this.arrHours[i] = this.arrHours[i-1] + 1;
    }

    this.userService.get().then((val: CurrentUser) => {
      this.currentUser = val;
      this.cliniqueService.getAll(this.currentUser.data.emailpro, 'email')
      .subscribe((results:Clinique[]) => {
        if(results && results.length > 0) {
          //const dispo_str = results[0].disponibilite;
          const dispo = new Disponibilites();
          this.clinique_dispos = dispo.parse(results[0].disponibilite);
          const hour = Number(this.clinique_dispos[0].hDebut.split(':')[0]);
          const minute = Number(this.clinique_dispos[0].hDebut.split(':')[1]);
          let day = new Date();
         //day.setHours(hour);
          //day.setMinutes(minute);
          //this.hDebut = day.getTime();

          this.data_load = true;
        }
      });
    });

  }

  ngDoCheck():void {
  }



  select(event:any) {
    console.log("date/hour: " + event);
  }

}
