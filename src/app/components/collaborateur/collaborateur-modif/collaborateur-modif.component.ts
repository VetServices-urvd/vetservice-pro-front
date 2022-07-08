import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collaborateur } from '../../../models/collaborateur.model';
import { GestionMode } from '../../../models/common.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'home-collaborateur-modif',
  templateUrl: './collaborateur-modif.component.html',
  styleUrls: ['./collaborateur-modif.component.scss']
})
export class CollaborateurModifComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  @Input() enable_allowed = true;
  @Input() adminIsUser:boolean = false;
  @Input() collaborateur: Collaborateur = <Collaborateur>{};
  @Output() ope: EventEmitter<GestionMode> = new EventEmitter<GestionMode>();
  hide = true;
  hide2 = true;
  collabModifyForm!: FormGroup;

  ngOnInit(): void {
    this.collabModifyForm = this.fb.group({
      nom: [this.collaborateur.nom],
      prenom: [this.collaborateur.prenom],
      email: [this.collaborateur.emailPro],
      admin: [false],
      mdp_confirm: [''],
      mdp_change: ['']
    });
  }

  send(){
    const val = this.collabModifyForm.value;
    console.log("modif form: " + JSON.stringify(val));
  }

  launch(mode:GestionMode) {
    this.ope.emit(mode);
  }

}
