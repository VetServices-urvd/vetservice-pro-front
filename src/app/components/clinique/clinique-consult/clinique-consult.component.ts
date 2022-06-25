import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GestionMode } from '../../../models/common.model';
import { Clinique } from '../../../models/clinique.model';

@Component({
  selector: 'home-clinique-consult',
  templateUrl: './clinique-consult.component.html',
  styleUrls: ['./clinique-consult.component.scss']
})
export class CliniqueConsultComponent implements OnInit {

  @Input() enable_allowed: boolean = true;
  @Input() clinique: Clinique = <Clinique>{};
  @Output() ope: EventEmitter<GestionMode> = new EventEmitter<GestionMode>();
  constructor() { }

  ngOnInit(): void {
  }

  launch(mode:GestionMode) {
    this.ope.emit(mode);
  }
}
