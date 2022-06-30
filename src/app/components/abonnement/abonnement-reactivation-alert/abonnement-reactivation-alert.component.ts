import { Component, Inject, OnInit } from '@angular/core';
import { Abonnement } from '../../../models/abonnement.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'home-abonnement-reactivation-alert',
  templateUrl: './abonnement-reactivation-alert.component.html',
  styleUrls: ['./abonnement-reactivation-alert.component.scss']
})
export class AbonnementReactivationAlertComponent implements OnInit {

  abonnement: Abonnement = <Abonnement>{};
  HEADER = "Renouvellment de votre abonnement"
  typeA = new FormControl(null, Validators.required);

  content1 = "Opter pour le paiement mensuel ou annuel, puis vous pourrez procéder au paiement?";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private messageService: MessageService) {
    this.abonnement = this.data.abonnement;
  }

  ngOnInit(): void {
    console.log("start " + JSON.stringify(this.data));
  }

  action() {
    this.typeA.value;
   if(this.typeA.value) {
      this.messageService.add({
        severity: "success",
        summary: "Confirmation",
        detail: "L'abonnement à été renouveller ! la frequence de paiement sera " + this.typeA.value
      });
    }
  }
}
