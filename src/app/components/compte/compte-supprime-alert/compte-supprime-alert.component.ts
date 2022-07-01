import { Component, Inject, OnInit } from '@angular/core';
import { Veterinaire } from '../../../models/veterinaire.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'home-compte-supprime-alert',
  templateUrl: './compte-supprime-alert.component.html',
  styleUrls: ['./compte-supprime-alert.component.scss']
})
export class CompteSupprimeAlertComponent implements OnInit {

  veterinaire: Veterinaire = <Veterinaire>{};
  HEADER = "Suppression de votre compte"
  CONTENT = "Voulez-vous procéder à la suppression définitive de votre compte ?";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private messageService: MessageService) {
    this.veterinaire = this.data.veterinaire;
  }

  ngOnInit(): void {
    console.log("start " + JSON.stringify(this.data));
  }

  action() {
    this.messageService.add({
      severity: "success",
      summary: "Confirmation",
      detail: "L'abonnement à été renouveller !"
    });
  }
}
