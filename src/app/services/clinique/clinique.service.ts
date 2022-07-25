import { Injectable } from '@angular/core';
import { MOCK_FILE, QueryPayload } from '../../models/common.model';
import { HttpClient } from '@angular/common/http';
import { Clinique } from '../../models/clinique.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRequestGet } from '../state/services.state';

@Injectable({
  providedIn: 'root'
})
export class CliniqueService implements IRequestGet<Clinique[]>{

  constructor(private http:HttpClient) { }

  getAll(payload?: QueryPayload):Observable<Clinique[]>{
    return this.http.get<any>(MOCK_FILE)
    .pipe(
      map((e:any) => {
        const rep =  e.cliniques;
        console.log("API cliniques: " + JSON.stringify(rep))
        return rep;
      })
    );
  }
}
