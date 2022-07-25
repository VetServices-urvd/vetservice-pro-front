import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collaborateur } from '../../models/collaborateur.model';
import { Observable } from 'rxjs';
import { MOCK_FILE, QueryPayload } from '../../models/common.model';
import { map } from 'rxjs/operators';
import { Prestation } from '../../models/prestation.model';
import { IRequestGet } from '../state/services.state';

@Injectable({
  providedIn: 'root'
})
export class PrestationService implements IRequestGet<Prestation[]>{

  constructor(private http: HttpClient) { }

  getAll(payload?: QueryPayload):Observable<Prestation[]>{
    return this.http.get<any>(MOCK_FILE)
    .pipe(
      map((e:any) => {
        const rep =  e.prestations.data;
        console.log("API prestations: " + JSON.stringify(rep))
        return rep;
      })
    );
  }
}
