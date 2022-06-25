import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { GestionMode, ModelGestion } from '../../../../../../models/common.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { CollaborateurSupprimeAlertComponent } from '../../../../../../components/collaborateur/collaborateur-supprime-alert/collaborateur-supprime-alert.component';

@Component({
  selector: 'app-collaborateur-manager-view',
  templateUrl: './collaborateur-manager-view.component.html',
  styleUrls: ['./collaborateur-manager-view.component.scss']
})
export class CollaborateurManagerViewComponent implements OnInit {
  title = "Collaborateur";
  user: Collaborateur = <Collaborateur>{};
  user_mode:GestionMode = 'consultation';
  collabsGestion: ModelGestion<Collaborateur>[] = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = {civilite: "Mr", nom:"ST-VINCHEN", prenom: "Patrick", emailPro:"oiu@oiu.oiu",
      fonction:"Assistant", admin: true }

    // this.collabsGestion.push({mode:'consultation', model:
    //   {civilite: "Mr", nom:"Walls", prenom: "Goerge", emailPro:"gwalls@email.eu",
    //   fonction:"Docteur", admin: true }
    // });
    console.log("COLLAB AUTRE: " + JSON.stringify(this.collabsGestion));
  }

  getMode(mode:GestionMode) {
    console.log(mode);
    this.user_mode = mode;
    if(mode === 'supression') this.openForDelete(this.user, false);
  }

  getMode2(mode:GestionMode, index: number) {
    console.log(mode);
    this.collabsGestion[index].mode = mode;
    if(mode === 'supression') this.openForDelete(this.collabsGestion[index].model,true);
  }
  openForDelete(collab: Collaborateur, byAdmin: boolean) {
    this.dialog.open(CollaborateurSupprimeAlertComponent, {
      data: {
        collaborateur: collab,
        enable_admin: byAdmin
      }
    });
  }
}
