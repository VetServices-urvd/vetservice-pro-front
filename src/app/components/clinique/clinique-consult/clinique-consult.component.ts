import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GestionMode } from '../../../models/common.model';
import { Clinique, Disponibilites, DisponibiliteItem } from '../../../models/clinique.model';
import { CliniqueDeleteAlertComponent } from '../clinique-delete-alert/clinique-delete-alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'home-clinique-consult',
  templateUrl: './clinique-consult.component.html',
  styleUrls: ['./clinique-consult.component.scss']
})
export class CliniqueConsultComponent implements OnInit {

  @Input() enable_allowed: boolean = true;
  @Input() clinique: Clinique = <Clinique>{};
  @Output() ope: EventEmitter<GestionMode> = new EventEmitter<GestionMode>();
  diponibilites:DisponibiliteItem[] = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const dispo = new Disponibilites();
    this.diponibilites = dispo.parse(this.clinique.disponibilite);
  }

  deleteAction() {
    this.dialog.open(CliniqueDeleteAlertComponent, {
      data: {
        clinique: this.clinique
      }
    });
  }

  launch(mode:GestionMode) {
    this.ope.emit(mode);
  }
}
