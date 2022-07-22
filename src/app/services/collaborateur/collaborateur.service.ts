import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getUrl, MOCK_FILE } from '../../models/common.model';
import { Collaborateur } from '../../models/collaborateur.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  constructor(private http: HttpClient) { }

  getAll(val?:any, param?:string):Observable<Collaborateur[]>{
    return this.http.get<any>(MOCK_FILE)
    .pipe(
      map((e:any) => {
        const rep =  e.collaborateurs;
        console.log("API collaborteurs: " + JSON.stringify(rep))
        return rep;
      })
    );
  }
}
