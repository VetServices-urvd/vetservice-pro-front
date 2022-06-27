import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { GestionMode } from '../../../models/common.model';
import { Clinique, Adresse, AdresseItem, Disponibilites, DisponibiliteItem } from '../../../models/clinique.model';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'home-clinique-modif',
  templateUrl: './clinique-modif.component.html',
  styleUrls: ['./clinique-modif.component.scss']
})
export class CliniqueModifComponent implements OnInit {

  @Input() enable_allowed: boolean = true;
  @Input() clinique: Clinique = <Clinique>{};
  
  @Output() ope: EventEmitter<GestionMode> = new EventEmitter<GestionMode>();
  new_clinique: Clinique = <Clinique>{};
  //adresse
  adresseGet = <AdresseItem>{};

   //dispo
  dispos:Disponibilites;
  //disposItems:DisponibiliteItem[] = []
  availableDays:  string[] = [];
  selectedDays: string[] = [];
  days: string[] = [];
  draggedDay:any;
  dayCtrl = new FormControl();

  constructor() {
    this.dispos = new Disponibilites();
  }

  ngOnInit(): void {
    this.new_clinique = Object.assign({}, this.clinique);
    const adr = new Adresse();
    this.adresseGet =  adr.parse(this.new_clinique.adresse);
    console.log("adr item " + JSON.stringify(this.adresseGet));


    if(this.new_clinique.disponibilite)this.dispos.parse(this.new_clinique.disponibilite);
    Object.assign(this.availableDays, this.dispos.daysGet)

  }

  // adresseGet():AdresseItem {
  //   const adr = new Adresse();
  //   const item = adr.parse(this.clinique.adresse);
  //   return item;
  // }
  /**Dispo */
  dragStart(day: string) {
    this.draggedDay = day;
  }
  dragEnd() {
    this.draggedDay = null;
  }
  drop(event:any) {
    if (this.draggedDay) {
        let index = this.availableDays.findIndex(v => v === this.draggedDay);
        this.selectedDays.push(this.draggedDay);
        this.availableDays= this.availableDays.filter((val,i) => i!=index);
        this.draggedDay = null;
    }
    console.log("now " + JSON.stringify(this.selectedDays));
    console.log("reste " + JSON.stringify(this.availableDays));
  }
  update(day:string){
    console.log("add " + day);
    let index = this.availableDays.findIndex((v:string) => v.toLowerCase() === day.toLowerCase());
    if(index === -1){
      this.selectedDays.pop();
    }else{
      this.selectedDays[this.selectedDays.length - 1] = this.availableDays[index];
      this.availableDays= this.availableDays.filter((val,i) => i!=index);
    }
    console.log("now " + JSON.stringify(this.selectedDays));
    console.log("reste " + JSON.stringify(this.availableDays));
  }
  getremoval(event:any){
    const day = event.value;
    console.log("remove " + day);
    this.availableDays.push(day);
    console.log("now " + JSON.stringify(this.selectedDays));
    console.log("reste " + JSON.stringify(this.availableDays));
  }
  /** */
  reset(){
    this.new_clinique = <Clinique>{};
  }
  adresseChanged(){
    const adr = new Adresse();
    const current =  adr.parse(this.clinique.adresse);
    return this.adresseGet.voie !==  current.voie || this.adresseGet.nomVoie !==  current.nomVoie || this.adresseGet.complement !==  current.complement
     || this.adresseGet.codePostal !==  current.codePostal ||  this.adresseGet.ville !== current.ville;
  }
  sendAdresse(){
    if(this.adresseChanged()) {
      const adr = new Adresse(this.adresseGet);
      this.new_clinique.adresse = adr.to_string();
      // call rest service
    }
    console.log("modif form: " + JSON.stringify(this.new_clinique));
  }

  dispoChanged(){
    const dispos_autre = new Disponibilites();
    const current:DisponibiliteItem[] =  dispos_autre.parse(this.clinique.disponibilite);
  
    return this.dispos.equals(dispos_autre.to_string());
  }

  sendDispo(){
    if(this.dispoChanged()){
      const dispos = new Disponibilites(this.dispos.dispos);
      this.new_clinique.disponibilite = dispos.to_string();
    }
  }

  sendTel(){
    if( this.new_clinique.tel !== this.clinique.tel){

    }
  }

  launch(mode:GestionMode) {
    this.ope.emit(mode);
  }

}
