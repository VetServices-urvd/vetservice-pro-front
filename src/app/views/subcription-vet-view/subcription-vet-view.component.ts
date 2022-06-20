import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StepSubscription } from '../../models/common.model';
@Component({
  selector: 'app-subcription-vet-view',
  templateUrl: './subcription-vet-view.component.html',
  styleUrls: ['./subcription-vet-view.component.scss']
})
export class SubcriptionVetViewComponent implements OnInit {

  organizationStepForm!: FormGroup;
  lieuStepForm!: FormGroup;
  userStepForm!: FormGroup;
  abonnementStepForm!: FormGroup;
  hide = true;
  steps: string[] =  ['ORGANISME', 'ETABLISSEMENT', 'COLLABORATEUR', 'SOUSCRIPTION', 'END']
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.organizationStepForm = this.fb.group({
      intitule: ['', Validators.required],
      emailSociete: ['', [Validators.required, Validators.email]],
      code_siret: ['', Validators.required],
      code_siren: ['', Validators.required],
      coord_bank: ['', Validators.required]
    });

    this.lieuStepForm = this.fb.group({
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      disponibilite: ['']
    });

    this.userStepForm = this.fb.group({
      civilite: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      emailPro: ['', [Validators.required, Validators.email]],
      fonction: ['',  Validators.required],
      mdp: ['',  Validators.required],
      mdp_confirm: ['',  Validators.required]
    });

    this.abonnementStepForm = this.fb.group({
      type: ['', Validators.required],
      paiement: [false, Validators.required],
    });
  }

  nextStep() {

  }

  next(step:StepSubscription | string) {
    switch(step) {

      case 'ORGANISME':
        const organisation = this.organizationStepForm.value;
        console.log(JSON.stringify(organisation));
        break;
        // return this.organizationStepForm.get("intitule").valid && this.organizationStepForm.get("emailSociete").valid &&
        //   this.organizationStepForm.get("code_siret").valid && this.organizationStepForm.get("code_siren").valid &&
        //   this.organizationStepForm.get("coor_bank").valid;

      case 'ETABLISSEMENT':
        const etablisement = this.lieuStepForm.value;
        console.log(JSON.stringify(etablisement));
        break;
        // return this.lieuStepForm.get("adresse").valid && this.lieuStepForm.get("telephone").valid &&
        //   this.lieuStepForm.get("disponibilite").valid;
      case 'COLLABORATEUR':
        const user = this.userStepForm.value;
        console.log(JSON.stringify(user));
        break;
        // return this.organizationStepForm.get("civilite").valid && this.organizationStepForm.get("nom").valid &&
        //   this.organizationStepForm.get("prenom").valid && this.organizationStepForm.get("emailPro").valid &&
        //   this.organizationStepForm.get("fonction").valid && this.organizationStepForm.get("mdp").valid &&
        //   this.organizationStepForm.get("mdp_confirm").valid;
      case 'SOUSCRIPTION':
        const abonnement = this.abonnementStepForm.value;
        console.log(JSON.stringify(abonnement));
        break;
        //return this.organizationStepForm.get("type").valid && this.organizationStepForm.get("paiement").valid;
      case 'END':
        break;
      default:
        break;;
    }
  }
  previous(step:StepSubscription | string) {
    switch(step) {

      case 'ORGANISME':
        break;
      case 'ETABLISSEMENT':
        this.lieuStepForm.reset();
        this.lieuStepForm.reset();
        this.lieuStepForm.reset();
        break;
      case 'COLLABORATEUR':
        break;
        // return this.organizationStepForm.get("civilite").valid && this.organizationStepForm.get("nom").valid &&
        //   this.organizationStepForm.get("prenom").valid && this.organizationStepForm.get("emailPro").valid &&
        //   this.organizationStepForm.get("fonction").valid && this.organizationStepForm.get("mdp").valid &&
        //   this.organizationStepForm.get("mdp_confirm").valid;
      case 'SOUSCRIPTION':
       break;
      case 'END':
        break;
      default:
        break;
    }
  }

}
