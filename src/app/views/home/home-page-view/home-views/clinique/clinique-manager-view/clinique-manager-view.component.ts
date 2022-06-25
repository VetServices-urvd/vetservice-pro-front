import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { Clinique } from '../../../../../../models/clinique.model';
import { GestionMode, ModelGestion } from '../../../../../../models/common.model';

@Component({
  selector: 'app-clinique-manager-view',
  templateUrl: './clinique-manager-view.component.html',
  styleUrls: ['./clinique-manager-view.component.scss']
})
export class CliniqueManagerViewComponent implements OnInit {
  title = 'Clinique';
  user: Collaborateur = <Collaborateur>{};
  clinique_user_gestion:ModelGestion<Clinique> = <ModelGestion<Clinique>>{};
  cliniquesGestion: ModelGestion<Clinique>[] =  [];
  constructor() { }

  ngOnInit(): void {
    this.user.clinique = {adresse: "46 Rue oaks stanton, 82780 faraday", tel: "0634017279",
      disponibilite:"l"};
    this.clinique_user_gestion = {mode: 'consultation',
      model:Object.assign({}, this.user.clinique)};

      const autre_lieu = {adresse: "51-53 Avenue Martin Dupres, 82780 faraday",
        tel: "0634017279", disponibilite:"l"}
      this.cliniquesGestion.push({mode: 'consultation',
        model: autre_lieu});
  };
  getMode(mode:GestionMode) {
    console.log(mode);
    this.clinique_user_gestion.mode = mode;
    // if(mode === 'supression'){
    //   this.openForDelete(this.clinique_user_gestion.model, false);
    // }
  }

  getMode2(mode:GestionMode, index: number) {
    console.log(mode);
    this.cliniquesGestion[index].mode = mode;
    // if(mode === 'supression') {
    //   this.openForDelete(this.cliniquesGestion[index].model,true);
    // }
  }
  openForDelete(clinique: Clinique, byAdmin: boolean) {
    // this.dialog.open(CollaborateurSupprimeAlertComponent, {
    //   data: {
    //     clinique: collab,
    //     enable_admin: byAdmin
    //   }
    // });
  }

}
