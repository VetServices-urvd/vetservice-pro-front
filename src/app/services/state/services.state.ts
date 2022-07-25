import { Injectable } from '@angular/core';
import { Collaborateur } from '../../models/collaborateur.model';
import { CollaborateurService } from '../collaborateur/collaborateur.service';
import { CliniqueService } from '../clinique/clinique.service';
import { VeterinaireService } from '../veterinaire/veterinaire.service';
import { Observable, of } from 'rxjs';
import { GestionMode, UpdatePayload, QueryPayload, UpdateAnyPayload } from '../../models/common.model';
import { environment } from '../../../environments/environment';


// @Injectable({
//   providedIn: 'root'
// })
// export class IRequestState<T> implements IRequest<T> {

//   constructor(){}
//   getAll():Observable<T> {
//     return null;
//   }
//   post():Observable<any> {
//     return null;
//   }
//   put():Observable<any> {
//     return null;
//   }
//   delete():Observable<any> {
//     return null;
//   }
// }
const API_URL = environment.api;
export const endpoints = {
  VETERINAIRE_GET: API_URL + '/veterinaires/get',
  VETERINAIRE_AUNT: API_URL + '/veterinaires/collab/auth',
  COLLABORATEUR_GET: API_URL + '/vet/collaborateurs/get',
}

export interface IRequestGet<T> {
  getAll(payload?: QueryPayload):Observable<T>;
}

export interface IRequestPost<T> {
  update(payload: UpdatePayload<T>): Observable<any>;
}
export interface IRequestPush {
  update(payload: UpdateAnyPayload): Observable<any>;
}

export interface IRequestPut {
  put():Observable<any>;
}

export interface IRequestDelete {
  delete():Observable<any>;
}
