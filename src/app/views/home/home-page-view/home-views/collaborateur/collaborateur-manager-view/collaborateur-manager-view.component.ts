import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { GestionMode, ModelGestion } from '../../../../../../models/common.model';


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
  constructor() { }

  ngOnInit(): void {
    this.user = {civilite: "Mr", nom:"VINCHEN", prenom: "Premo", emailPro:"oiu@oiu.oiu",
    fonction:"Assistant",
    admin: true }
  }

  getMode(mode:GestionMode) {
    console.log(mode);
    this.user_mode = mode;
  }

  getMode2(mode:GestionMode, index: number) {
    console.log(mode);
    this.collabsGestion[index].mode = mode;
  }
}
