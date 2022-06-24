import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collaborateur } from '../../../models/collaborateur.model';
import { GestionMode } from '../../../models/common.model';

@Component({
  selector: 'home-collaborateur-consult',
  templateUrl: './collaborateur-consult.component.html',
  styleUrls: ['./collaborateur-consult.component.scss']
})
export class CollaborateurConsultComponent implements OnInit {
  @Input() enable_allowed: boolean = true;
  @Input() user: Collaborateur = <Collaborateur>{};
  @Output() ope: EventEmitter<GestionMode> = new EventEmitter<GestionMode>();
  constructor() { }

  ngOnInit(): void {
  }

  launch(mode:GestionMode) {
    this.ope.emit(mode);
  }

}
