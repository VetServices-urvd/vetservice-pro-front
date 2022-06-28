import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Clinique } from '../../../models/clinique.model';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'home-clinique-delete-alert',
  templateUrl: './clinique-delete-alert.component.html',
  styleUrls: ['./clinique-delete-alert.component.scss']
})
export class CliniqueDeleteAlertComponent implements OnInit {

  clinique: Clinique = <Clinique>{};
  private CONTENT_TEXT = "Voulez-vous procéder à la suppression de la clinique: ";
  content = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private messageService: MessageService) {
    this.clinique = this.data.clinique;
  }

  ngOnInit(): void {
    console.log("start " + JSON.stringify(this.data));
    this.content = this.CONTENT_TEXT + this.clinique.adresse + ' ?';
  }

  action() {
    this.messageService.add({
      severity: "info",
      summary: "Confirmed",
      detail: "Une clinique à été supprimer !"
    });
    return true;
  }

}
