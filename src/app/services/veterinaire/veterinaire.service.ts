import { Injectable } from '@angular/core';
import { Veterinaire } from '../../models/veterinaire.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

    return this.http.get<any>(this.url)
    .pipe(
      map((e:any) => {
        const rep =  e;
        console.log("API veterinaire: " + JSON.stringify(rep))
        return rep.veterinaires.data;
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
