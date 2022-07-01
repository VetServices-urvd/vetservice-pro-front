import { Injectable } from '@angular/core';
import { Veterinaire } from '../../models/veterinaire.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MOCK_FILE, UpdatePayload } from '../../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class VeterinaireService {

  constructor(private http: HttpClient) { }
  url = MOCK_FILE;
  get(value?:string):Observable<Veterinaire>{
    return this.http.get<any>(this.url)
    .pipe(
      map((e:any) => {
        const rep =  e.veterinaire;
        console.log("API veterinaire: " + JSON.stringify(rep))
        return rep;
      })
    );
  }

  update(payload?: UpdatePayload):Observable<boolean> {
    return this.http.post(this.url, payload)
      .pipe(
        map((e:any) => {
          console.log("API veterinaire update: "+e.status);
          return e.status === 'SUCCES';
        })
      );
  }
}
