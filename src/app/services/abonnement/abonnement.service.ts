import { Injectable } from '@angular/core';
import { MOCK_FILE, UpdatePayload } from '../../models/common.model';
import { HttpClient } from '@angular/common/http';
import { Abonnement } from '../../models/abonnement.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  constructor(private http: HttpClient) { }
  url = MOCK_FILE;
  get(param?:string):Observable<Abonnement>{
    return this.http.get<any>(this.url)
    .pipe(
      map((e:any) => {
        const rep =  e.abonnement;
        console.log("API abonnement: " + JSON.stringify(rep))
        return rep;
      })
    );
  }

  update(payload: UpdatePayload){
    //return this.http.get<any>(this.url)
  }
}
