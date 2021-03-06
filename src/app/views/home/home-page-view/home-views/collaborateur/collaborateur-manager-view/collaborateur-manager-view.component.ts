import { Component, OnInit, DoCheck } from '@angular/core';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { GestionMode, ModelGestion } from '../../../../../../models/common.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { CollaborateurSupprimeAlertComponent } from '../../../../../../components/collaborateur/collaborateur-supprime-alert/collaborateur-supprime-alert.component';
import { CollaborateurService } from '../../../../../../services/collaborateur/collaborateur.service';
import { CurrentUser } from '../../../../../../models/user.model';
import { UserService } from '../../../../../../services/user/user.service';
import { LoadingViewModel } from '../../../../../default-view/loader-view/loader-view.component';

@Component({
  selector: 'app-collaborateur-manager-view',
  templateUrl: './collaborateur-manager-view.component.html',
  styleUrls: ['./collaborateur-manager-view.component.scss']
})
export class CollaborateurManagerViewComponent implements OnInit, DoCheck, LoadingViewModel {
  data_load:boolean;
  title = "Espace collaborateur";
  currentUser!: CurrentUser;
  user!: Collaborateur;
  user_mode:GestionMode = 'consultation';
  collabsGestion: ModelGestion<Collaborateur>[] = [];
  constructor(public dialog: MatDialog,
    private collabService: CollaborateurService,
    private userService: UserService) {
      this.data_load= false;
     }

  ngOnInit(): void {
    // this.userService.current().then((val: CurrentUser) => {
    //   this.currentUser = val;
    // });
    this.currentUser = this.userService.current();
    //console.log("CURRENT USER  => " + this.currentUser);
    this.collabService.getAll({value:this.currentUser.data.cliniqueref, query:'adr'})
    .subscribe((c:Collaborateur[]) => {
      if(this.currentUser && c.length > 0){
        console.log("COLLAB FETCH: " + JSON.stringify((this.currentUser)));
        this.user = c.filter(collab => collab.emailpro === this.currentUser.data.emailpro)[0];
        + JSON.stringify(this.user);
        console.log("COLLAB ME: " + JSON.stringify(this.user));
        if(c.length > 1){
          this.collabsGestion = c
          .filter((collab,i) => collab.emailpro !== this.currentUser.data.emailpro)
          .map(collab => {
            return <ModelGestion<Collaborateur>>{mode:'consultation', model:collab}
          });
        }
      }
      console.log("COLLAB ME: " + JSON.stringify(this.user));
      console.log("COLLAB AUTRE: " + JSON.stringify(this.collabsGestion));
    });
  }
  ngDoCheck(): void{
    if(this.currentUser &&   (this.user  || this.collabsGestion)) this.data_load = true;
    else this.data_load = false;
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
