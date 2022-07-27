import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Collaborateur } from '../../models/collaborateur.model';
import { Observable } from 'rxjs';
import { MOCK_FILE, QueryPayload } from '../../models/common.model';
import { map } from 'rxjs/operators';
import { Prestation } from '../../models/prestation.model';
import { endpoints, IRequestGet } from '../state/services.state';

@Injectable({
  providedIn: 'root'
})
export class PrestationService implements IRequestGet<Prestation[]>{

  constructor(private http: HttpClient) { }
  url = endpoints.PRESTATAIRE_GET; 
  getAll(payload?: QueryPayload):Observable<Prestation[]>{
    console.log("PAYLOAD for API prestations: " + JSON.stringify(payload));
    let req = null;
    if(payload){
      var params = new HttpParams ();
      if(payload.value && payload.query){
        const params = new HttpParams().set(payload.query, payload.value);
        req = this.http.get<any>(this.url,{params});
      }else if(payload.search){
        const params = new HttpParams()
        .set('search', payload.search.value)
        .set('field', payload.search.query)
        req = this.http.get<any>(this.url,{params});
      }
    }else{
      req = this.http.get<any>(this.url);
    }
    return req!
    .pipe(
      map((e:any) => {
        const rep =  e.prestations;
        console.log("API prestations: " + JSON.stringify(rep))
        return rep.data;
      })
    );
  }
}
