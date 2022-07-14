import { Component, OnInit, ViewChild, DoCheck, } from '@angular/core';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { Clinique } from '../../../../../../models/clinique.model';
import { GestionMode, ModelGestion } from '../../../../../../models/common.model';
import { ConfirmationService, MessageService } from "primeng/api";
import { CliniqueDeleteAlertComponent } from '../../../../../../components/clinique/clinique-delete-alert/clinique-delete-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { CliniqueService } from '../../../../../../services/clinique/clinique.service';
import { UserService } from '../../../../../../services/user/user.service';
import { CurrentUser } from '../../../../../../models/user.model';

@Component({
  selector: 'app-clinique-manager-view',
  templateUrl: './clinique-manager-view.component.html',
  styleUrls: ['./clinique-manager-view.component.scss']
})
export class CliniqueManagerViewComponent implements OnInit {
  title = 'Clinique';
  currentUser: CurrentUser = <CurrentUser>{};
  clinique_user_gestion:ModelGestion<Clinique> = <ModelGestion<Clinique>>{};
  cliniquesGestion: ModelGestion<Clinique>[] =  [];

  constructor(private cliniqueService:CliniqueService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.userService.get().then((val: CurrentUser) => {
      this.currentUser = val;
    });
    this.cliniqueService.getAll().subscribe((results:Clinique[]) => {
      if(this.currentUser && results.length>0){
        this.clinique_user_gestion = {
          mode:"consultation",
          model:results.filter(c => {
         return c.adresse === this.currentUser.data.adresse &&
          c.vetref === this.currentUser.data.vetref;
        })[0]}
        if(results.length > 1){
          this.cliniquesGestion = results.filter(c =>c.adresse !== this.currentUser.data.adresse)
          .map(c => <ModelGestion<Clinique>>{mode:"consultation", model:c});
        }
      }
    });
  }

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
