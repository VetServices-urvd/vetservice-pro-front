import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Collaborateur } from '../../../models/collaborateur.model';


@Component({
  selector: 'app-collaborateur-supprime-alert',
  templateUrl: './collaborateur-supprime-alert.component.html',
  styleUrls: ['./collaborateur-supprime-alert.component.scss']
})
export class CollaborateurSupprimeAlertComponent implements OnInit {
  collab: Collaborateur = <Collaborateur>{};
  private CONTENT_TEXT = " Voulez-vous procéder à la suppression de ce compte ?";
  content = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.collab = this.data.collaborateur;
  }

  ngOnInit(): void {
    console.log("start " + JSON.stringify(this.data));
    const deleteted_collab = this.collab.civilite + " " +
    this.collab.nom + " " + this.collab.prenom + ","
    this.content = (this.data.enable_admin?"":deleteted_collab)
    + this.CONTENT_TEXT;

  }

  action() {
    console.log("delete " + JSON.stringify(this.collab.emailPro));
    return true;
  }

}
