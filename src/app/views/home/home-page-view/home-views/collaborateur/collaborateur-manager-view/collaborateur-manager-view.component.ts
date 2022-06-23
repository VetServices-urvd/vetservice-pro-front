import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../../../../../../models/collaborateur.model';
import { GestionMode, ModelGestion } from '../../../../../../models/common.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.user = {civilite: "Mr", nom:"VINCHEN", prenom: "Premo", emailPro:"oiu@oiu.oiu",
    fonction:"Assistant",
    admin: true }

    this.collabsGestion.push({mode:'consultation', model: this.user});
    this.collabsGestion.push({mode:'consultation', model: this.user});
  }

  getMode(mode:GestionMode) {
    console.log(mode);
    this.user_mode = mode;
    //if(mode === 'supression') this.openForDelete(content);
  }

  getMode2(mode:GestionMode, index: number) {
    console.log(mode);
    this.collabsGestion[index].mode = mode;
  }
  openForDelete(content: any) {
    this.modalService.open(content).result.then((result: any) => {
      console.log(`Closed with: ${result}`);
    });
    // , (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }
}
