import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';
import { MatRadioGroup } from '@angular/material/radio';
@Component({
  selector: 'app-inscription-collab-view',
  templateUrl: './inscription-collab-view.component.html',
  styleUrls: ['./inscription-collab-view.component.scss']
})
export class InscriptionCollabViewComponent implements OnInit {
  collabNewForm!: FormGroup;
  hide = true;
  hide2 = true;


  constructor(private fb: FormBuilder,
    private navigationService: NavigationService) { }
  ngOnInit(): void {
    this.collabNewForm = this.fb.group({
      civilite: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      emailPro: ['', [Validators.required, Validators.email]],
      fonction: ['Docteur', Validators.required],
      admin:[false],
      mdp: ['',  [Validators.required, Validators.min(6)]],
      mdp_confirm: ['', [Validators.required, Validators.min(6)]]
    });
  }

  validPswd():boolean{
     return (this.collabNewForm.controls['mdp'].valid && this.collabNewForm.controls['mdp_confirm'].valid)
      && (this.collabNewForm.controls['mdp'].value ===  this.collabNewForm.controls['mdp_confirm'].value);
  }

  send(){
    const user = this.collabNewForm.value;
    console.log(JSON.stringify(user)
   + ' /Pswd match = '+ this.validPswd());
  }
}
