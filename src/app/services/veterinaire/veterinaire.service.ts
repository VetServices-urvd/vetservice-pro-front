import { Injectable } from '@angular/core';
import { Veterinaire } from '../../models/veterinaire.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MOCK_FILE, UpdatePayload, UpdateAnyPayload, QueryPayload } from '../../models/common.model';
import { IRequestGet, IRequestPush, endpoints } from '../state/services.state';

@Injectable({
  providedIn: 'root'
})
export class VeterinaireService implements IRequestGet<Veterinaire[]>, IRequestPush {

  constructor(private http: HttpClient){ }
  //url = MOCK_FILE;
  url = endpoints.VETERINAIRE_GET;
  getAll(payload?:QueryPayload):Observable<Veterinaire[]>{
    console.log("PAYLOAD for API veterinaires: " + JSON.stringify(payload));
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
        const rep =  e.veterinaires;
        console.log("API veterinaires: " + JSON.stringify(rep))
        return rep.data;
      })
    );
  }

  update(payload: UpdateAnyPayload):Observable<any> {
    return this.http.post(this.url, payload)
      .pipe(
        map((e:any) => {
          console.log("API veterinaire update: "+e.status);
          return e.status === 'SUCCES';
        })
      );
  }
}
