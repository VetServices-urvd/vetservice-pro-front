import { Injectable } from '@angular/core';
import { MOCK_FILE, QueryPayload } from '../../models/common.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Clinique } from '../../models/clinique.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { endpoints, IRequestGet } from '../state/services.state';

@Injectable({
  providedIn: 'root'
})
export class CliniqueService implements IRequestGet<Clinique[]>{

  constructor(private http:HttpClient) { }
  url = endpoints.CLINIQUE_GET;
  getAll(payload?: QueryPayload):Observable<Clinique[]>{
    console.log("PAYLOAD for API cliniques: " + JSON.stringify(payload));
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
        const rep =  e.cliniques;
        console.log("API cliniques: " + JSON.stringify(rep))
        return rep.data;
      })
    );
  }
}
