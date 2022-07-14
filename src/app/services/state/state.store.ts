import { Injectable } from '@angular/core';
import { Collaborateur } from '../../models/collaborateur.model';
import { CollaborateurService } from '../collaborateur/collaborateur.service';
import { CliniqueService } from '../clinique/clinique.service';
import { VeterinaireService } from '../veterinaire/veterinaire.service';
import { Observable, of } from 'rxjs';
import { GestionMode, UpdatePayload } from '../../models/common.model';
export interface AppState {
  collaborateurs: Collaborateur[];
}

@Injectable({
  providedIn: 'root'
})
export class StateStore {

  constructor(){}

  calc_timestamp(step: number): number[]{
      const arrHour = [];
      for(let i = 800; i <= 1900; i + step){

        if(i%60 === 0 || i%60 === 30 || i%60 === 40){
          arrHour.push(i + 1);
        }else{
          arrHour.push(i);
        }
      }
      return arrHour;
  }


}
