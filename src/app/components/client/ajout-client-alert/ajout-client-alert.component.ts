import { Inject, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { Client } from '../../../models/client.model';
import { ClientService } from '../../../services/clients/client.service';

@Component({
  selector: 'app-ajout-client-alert',
  templateUrl: './ajout-client-alert.component.html',
  styleUrls: ['./ajout-client-alert.component.scss']
})
export class AjoutClientAlertComponent implements OnInit {

  new_client!: Client;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   private clientService: ClientService,
   private messageService: MessageService) {
  }

  ngOnInit(): void {
  }
  action() {
    //TODO SERVICE CALL
    console.log("delete " + JSON.stringify(this.new_client));
      this.messageService.add({
      severity: "success",
      summary: "Confirmation",
      detail: "Un nouveaux client à été rajouté !"
    });

    return true;
  }

}
