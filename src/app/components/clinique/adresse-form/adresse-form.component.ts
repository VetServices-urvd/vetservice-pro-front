import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Clinique, AdresseItem } from '../../../models/clinique.model';

@Component({
  selector: 'cpt-adresse-form',
  templateUrl: './adresse-form.component.html',
  styleUrls: ['./adresse-form.component.scss']
})
export class AdresseFormComponent implements OnInit {
  // @Input() adresse: AdresseItem = <AdresseItem>{};
  // new_adr: AdresseItem = <AdresseItem>{};
  // @Output() adr_change = new EventEmitter<AdresseItem>();
  //adresseForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    // if(this.adresse){
    //   this.new_adr = Object.assign({},this.adresse);
      // this.adresseForm = this.fb.group({
      //   voie: [this.adresse.voie, Validators.required],
      //   nvoie: [this.adresse.nomVoie, Validators.required],
      //   complement: [this.adresse.complement],
      //   cp: [this.adresse.codePostal, Validators.required],
      //   ville: [this.adresse.ville, Validators.required],
      // });
    // }
    // else {
      // this.adresseForm = this.fb.group({
      //   voie: ['', Validators.required],
      //   nvoie: ['', Validators.required],
      //   complement: [''],
      //   cp: ['', Validators.required],
      //   ville: ['', Validators.required],
      // });
    // }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if(!changes.new.firstChange && changes.new.previousValue
  //     && changes.new.currentValue !== changes.new.previousValue) {
  //       this.adr_change.emit(this.new_adr);
  //   }
  // }


}
