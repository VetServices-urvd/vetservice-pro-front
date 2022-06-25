import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { GestionMode } from '../../../models/common.model';
import { Clinique } from '../../../models/clinique.model';

@Component({
  selector: 'home-clinique-modif',
  templateUrl: './clinique-modif.component.html',
  styleUrls: ['./clinique-modif.component.scss']
})
export class CliniqueModifComponent implements OnInit {

  @Input() enable_allowed: boolean = true;
  @Input() adresse: Clinique = <Clinique>{};
  @Output() ope: EventEmitter<GestionMode> = new EventEmitter<GestionMode>();
  constructor() { }

  ngOnInit(): void {
  }

  launch(mode:GestionMode) {
    this.ope.emit(mode);
  }

}
