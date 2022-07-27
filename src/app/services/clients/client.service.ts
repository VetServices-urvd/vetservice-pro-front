import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MOCK_FILE, QueryPayload } from '../../models/common.model';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Client } from '../../models/client.model';
import { endpoints, IRequestGet } from '../state/services.state';

@Injectable({
  providedIn: 'root'
})
export class ClientService implements IRequestGet<Client[]>{

  constructor(private http: HttpClient) { }
  url = endpoints.CLIENT_GET;
  getAll(payload?: QueryPayload):Observable<Client[]>{
    console.log("PAYLOAD for API clients: " + JSON.stringify(payload));
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
        const rep =  e.clients;
        console.log("API clients: " + JSON.stringify(rep))
        return rep.data;
      })
    );
  }
}
