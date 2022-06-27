import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GestionMode } from '../../../models/common.model';
import { Clinique, Disponibilites } from '../../../models/clinique.model';

@Component({
  selector: 'home-clinique-consult',
  templateUrl: './clinique-consult.component.html',
  styleUrls: ['./clinique-consult.component.scss']
})
export class CliniqueConsultComponent implements OnInit {

  @Input() enable_allowed: boolean = true;
  @Input() clinique: Clinique = <Clinique>{};
  @Output() ope: EventEmitter<GestionMode> = new EventEmitter<GestionMode>();
  diponibilites:any;
  constructor() { }

  ngOnInit(): void {
    const dispo = new Disponibilites();
    const itmes = dispo.parse(this.clinique.disponibilite);
    this.diponibilites = dispo.to_string();
  }

  launch(mode:GestionMode) {
    this.ope.emit(mode);
  }
}
