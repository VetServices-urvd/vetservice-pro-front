import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-inscription-collab-view',
  templateUrl: './inscription-collab-view.component.html',
  styleUrls: ['./inscription-collab-view.component.scss']
})
export class InscriptionCollabViewComponent implements OnInit {
  collabNewForm!: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder,
    private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.collabNewForm = this.fb.group({
      civilite: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      emailPro: ['', [Validators.required, Validators.email]],
      fonction: ['',  Validators.required],
      mdp: ['',  Validators.required],
      mdp_confirm: ['',  Validators.required]
    });
  }

  send(){
    const user = this.collabNewForm.value;
    console.log(JSON.stringify(user));
  }
}
