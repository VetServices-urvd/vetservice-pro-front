import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Veterinaire, CoordonneeBancaire, CoordonneeBancaireItem } from '../../../models/veterinaire.model';
import { GestionMode } from '../../../models/common.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { VeterinaireService } from '../../../services/veterinaire/veterinaire.service';
@Component({
  selector: 'home-compte-modif',
  templateUrl: './compte-modif.component.html',
  styleUrls: ['./compte-modif.component.scss']
})
export class CompteModifComponent implements OnInit {

  @Input() vet: Veterinaire = <Veterinaire>{};
  coordBanq!: CoordonneeBancaireItem;
  @Output() modeEmit = new EventEmitter<GestionMode>();

  modifCompteForm!: FormGroup;
  constructor(private fb: FormBuilder,  private messageService: MessageService,
    private vetService: VeterinaireService) {}

  ngOnInit(): void {
    const c1 = new CoordonneeBancaire();
    this.coordBanq = c1.parse(this.vet.coordBanq, true);
    this.modifCompteForm = this.fb.group({
      nom: [this.vet.nom],
      email: [this.vet.emailSociete],
      code: [this.vet.numsociete]
    });
  }

  back(){
    this.modeEmit.emit('consultation');
  }

  hasChangeCoordBanq():boolean {
    return !this.vet.coordBanq.includes(this.coordBanq.intitule) ||
          !this.vet.coordBanq.includes(this.coordBanq.iban) ||
          !this.vet.coordBanq.includes(this.coordBanq.bic);
  }

  hasChangeVet():boolean {
    const {nom, email, code} = this.modifCompteForm.value;
    return this.vet.nom !== nom || this.vet.emailSociete !== email
          || this.vet.numsociete !== code || this.hasChangeCoordBanq();
  }

  send() {
    if(!this.modifCompteForm.invalid) {
      this.vetService.update();
      this.messageService.add({
        severity: "info",
        summary: "Modification",
        detail: "Le compte à été modifié !"
      });
    }
  }
}
