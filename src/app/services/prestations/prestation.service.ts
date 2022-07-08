import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collaborateur } from '../../models/collaborateur.model';
import { Observable } from 'rxjs';
import { MOCK_FILE } from '../../models/common.model';
import { map } from 'rxjs/operators';
import { Prestation } from '../../models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Prestation[]>{
    return this.http.get<any>(MOCK_FILE)
    .pipe(
      map((e:any) => {
        const rep =  e.prestations.data;
        console.log("API prestations: " + JSON.stringify(rep))
        return rep;
      })
    );
  }
}
