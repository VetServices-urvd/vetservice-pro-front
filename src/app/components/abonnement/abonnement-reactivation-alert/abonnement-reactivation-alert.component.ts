import { Component, Inject, OnInit } from '@angular/core';
import { Abonnement } from '../../../models/abonnement.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-abonnement-reactivation-alert',
  templateUrl: './abonnement-reactivation-alert.component.html',
  styleUrls: ['./abonnement-reactivation-alert.component.scss']
})
export class AbonnementReactivationAlertComponent implements OnInit {

  abonnement: Abonnement = <Abonnement>{};
  HEADER = "Renouvellment de votre abonnement"

  content1 = "Opter pour le paiement mensuel ou annuel, puis vous pourrez procéder au paiement?";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private messageService: MessageService) {
    this.abonnement = this.data.abonnement;
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
    return true;
  }
}
