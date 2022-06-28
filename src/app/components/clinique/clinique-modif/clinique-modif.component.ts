import { Component, OnInit, Output, Input, EventEmitter, AfterViewInit } from '@angular/core';
import { GestionMode } from '../../../models/common.model';
import { Clinique, Adresse, AdresseItem, Disponibilites, DisponibiliteItem } from '../../../models/clinique.model';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { CliniqueDeleteAlertComponent } from '../clinique-delete-alert/clinique-delete-alert.component';
import { MatDialog } from '@angular/material/dialog';
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
  dispoInput: DisponibiliteItem = <DisponibiliteItem>{};
  dispos:Disponibilites = new Disponibilites();;
  //disposItems:DisponibiliteItem[] = []
  availableDays:  string[] = [];
  //selectedDays: string[] = [];
  days: string[] = [];
  draggedDay:any;
  dayCtrl = new FormControl();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.new_clinique = Object.assign({}, this.clinique);
    const adr = new Adresse();
    this.adresseGet =  adr.parse(this.new_clinique.adresse);
    console.log("adr item " + JSON.stringify(this.adresseGet));
    // if(this.adresseGet.complement) {
    //   this.adresseGet.complement
    // }


  }
  ngAfterViewInit(): void {
    if(this.new_clinique.disponibilite){
      this.dispos.parse(this.new_clinique.disponibilite);
    }
    const ds:string[] = [];
    this.dispos.dispos.forEach((d:DisponibiliteItem) => ds.push(...d.day))
    this.availableDays =  this.dispos.daysGet.filter((val:string) => {
      return !ds.includes(val);
    });
    if(this.availableDays.length == 0) {
      this.availableDays = this.dispos.daysGet;
    }
    this.dispoInput.day = [];

    console.log("dispo items: "+ JSON.stringify(this.dispos.dispos));
    console.log("current clinique: "+ JSON.stringify(this.clinique));
  }

  /**Dispo */
  dragStart(day: string) {
    this.draggedDay = day;
  }
  dragEnd() {
    this.draggedDay = null;
  }
  drop(event:any) {
    if (this.draggedDay && this.dispoInput.day) {
        let index = this.availableDays.findIndex(v => v === this.draggedDay);
        this.dispoInput.day.push(this.draggedDay);
        this.availableDays= this.availableDays.filter((val,i) => i!=index);
        this.draggedDay = null;
    }
    console.log("now " + JSON.stringify(this.dispoInput.day));
    console.log("reste " + JSON.stringify(this.availableDays));
  }
  update(day:string){
    console.log("add " + day);
    let index = this.availableDays.findIndex((v:string) => v.toLowerCase() === day.toLowerCase());
    if(index === -1){
      this.dispoInput.day.pop();
    }else{
      this.dispoInput.day[this.dispoInput.day.length - 1] = this.availableDays[index];
      this.availableDays= this.availableDays.filter((val,i) => i!=index);
    }
    console.log("now " + JSON.stringify(this.dispoInput));
    console.log("reste " + JSON.stringify(this.availableDays));
  }
  getremoval(event:any){
    const day = event.value;
    console.log("remove " + day);
    this.availableDays.push(day);
    console.log("now " + JSON.stringify(this.dispoInput));
    console.log("reste " + JSON.stringify(this.availableDays));
  }

  input(){
    this.dispos.dispos.push(this.dispoInput);
    this.dispoInput = <DisponibiliteItem>{};
  }
  reduce(dispoItem: DisponibiliteItem){
    this.dispos.dispos = this.dispos.dispos.filter((d:DisponibiliteItem) => {
      if(d === dispoItem){
        this.availableDays.push(...d.day);
      }
      return d !== dispoItem
    });
  }

  /** */
  /**autre + service call*/
  reset(){
    this.new_clinique = <Clinique>{};
  }

  adresseChanged(){
    const adr = new Adresse();
    const current =  adr.parse(this.clinique.adresse);
    return this.adresseGet.voie !==  current.voie || this.adresseGet.nomVoie !==  current.nomVoie
      ||(this.adresseGet.complement && this.adresseGet.complement !==  current.complement)
      || this.adresseGet.codePostal !==  current.codePostal ||  this.adresseGet.ville !== current.ville;
  }

  sendAdresse(){
    if(this.adresseChanged()) {
      const adr = new Adresse(this.adresseGet);
      this.new_clinique.adresse = adr.to_string();
      // call rest service
      console.log("modif clinique/adresse: " + JSON.stringify(this.new_clinique));
    }
  }

  dispoChanged(){
    const dispos_initial = new Disponibilites();
    const current:DisponibiliteItem[] =  dispos_initial.parse(this.clinique.disponibilite);

    return !this.dispos.equals(dispos_initial.to_string());
  }


  sendDispo(){
    if(this.dispoChanged()){
      //const dispos = new Disponibilites(this.dispos.dispos);
      this.new_clinique.disponibilite = this.dispos.to_string();
     // call rest service
      console.log("modif clinique/disponibilite: " + JSON.stringify(this.new_clinique));
    }
  }

  sendTel(){
    if(this.new_clinique.tel !== this.clinique.tel){
      // call rest service
      console.log("modif clinique/tel: "+ JSON.stringify(this.clinique));
    }
  }

  launch(mode:GestionMode) {
    this.ope.emit(mode);
  }
  deleteAction() {
    this.dialog.open(CliniqueDeleteAlertComponent, {
      data: {
        clinique: this.clinique
      }
    });
  }

}
