import { Injectable } from '@angular/core';
import { MOCK_FILE, UpdatePayload, QueryPayload, UpdateAnyPayload } from '../../models/common.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Abonnement } from '../../models/abonnement.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { endpoints, IRequestGet, IRequestPush } from '../state/services.state';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService implements IRequestGet<Abonnement[]>, IRequestPush{

  constructor(private http: HttpClient) { }
  url = endpoints.ABONNEMENT_GET;
  getAll(payload?: QueryPayload):Observable<Abonnement[]>{
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
        const rep =  e.abonnements;
        console.log("API abonnements: " + JSON.stringify(rep))
        return rep.data;
      })
    );
  }

  update(payload: UpdateAnyPayload):Observable<any>{
    return this.http.post<any>(this.url, null);
  }
}
