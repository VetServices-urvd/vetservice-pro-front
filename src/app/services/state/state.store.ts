import { Injectable } from '@angular/core';
import { Collaborateur } from '../../models/collaborateur.model';
import { CollaborateurService } from '../collaborateur/collaborateur.service';
import { CliniqueService } from '../clinique/clinique.service';
import { VeterinaireService } from '../veterinaire/veterinaire.service';
import { Observable, of } from 'rxjs';
import { GestionMode } from '../../models/common.model';
export interface AppState {
  collaborateurs: Collaborateur[];
}
export interface Payload<T> {
  payload: T;
  mode: GestionMode;
}
export interface CollabPayload extends Payload<Collaborateur>{
}
@Injectable({
  providedIn: 'root'
})
export class StateStore {

  constructor(private collabService: CollaborateurService,
    private cliService: CliniqueService,
    private vetService: VeterinaireService ){
      this.init();
    }

    private _state:AppState = {collaborateurs:[]};

    // getstate<T>(): Observable<T> {
    //   return new Observable((obs:any) =>{

    //     if (obs instanceof Array<Collaborateur>) {
    //       obs.next(this._state.collaborateurs) ;
    //     }
    //     obs.complete();
    //   });
    // }

    push<T>(payload: Payload<T>){
      return
    }
    private init(){
      this.collabService.getAll().subscribe((r:any) => {
        this._state.collaborateurs = r;
      });
    }

}
