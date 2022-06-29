import { Component, OnInit, ViewChild, DoCheck, } from '@angular/core';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { Clinique } from '../../../../../../models/clinique.model';
import { GestionMode, ModelGestion } from '../../../../../../models/common.model';
import { ConfirmationService, MessageService } from "primeng/api";
import { CliniqueDeleteAlertComponent } from '../../../../../../components/clinique/clinique-delete-alert/clinique-delete-alert.component';
import { MatDialog } from '@angular/material/dialog';

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
      disponibilite:"[Lun-Mar-Mer-Jeu-Ven].8:30-18:00"};
      this.user.admin = true;
    this.clinique_user_gestion = {mode: 'consultation',
      model:Object.assign({}, this.user.clinique)};

      const autre_lieu = {adresse: "51-53 Avenue Martin Dupres, 82780 faraday",
        tel: "0634017279", disponibilite:"[Lun-Mar-Mer-Jeu-Ven].8:30-17:30/Sam.9:00-14:00"}
      this.cliniquesGestion.push({mode: 'consultation',
        model: autre_lieu});
  };
  // ngDoCheck():void{
  //   console.log("Check > " + this.clinique_user_gestion.mode);
  //   if(this.clinique_user_gestion.mode === 'supression') {
  //     this.deleteAction(this.clinique_user_gestion.model)
  //   }
  //   this.cliniquesGestion.forEach(cg =>{
  //     if(cg.mode === 'supression' ){
  //       this.deleteAction(cg.model);
  //     }
  //   });
  // }

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
}
