import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { getUrl, MOCK_FILE, QueryPayload } from '../../models/common.model';
import { Collaborateur } from '../../models/collaborateur.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RdvItem } from '../../models/rendez-vous.model';
import { IRequestGet, endpoints } from '../state/services.state';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService implements IRequestGet<Collaborateur[]> {

  constructor(private http: HttpClient) { }
  url = endpoints.COLLABORATEUR_GET;
  getAll(payload?: QueryPayload):Observable<Collaborateur[]>{
    console.log("PAYLOAD for API collaborteurs: " + JSON.stringify(payload));
    let req = null;
    if(payload){
      var params = new HttpParams();
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
        const rep =  e;
        console.log("API collaborteurs: " + JSON.stringify(rep))
        return rep.data;
      })
    );
  }
}
