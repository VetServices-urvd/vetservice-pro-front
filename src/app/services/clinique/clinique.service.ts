import { Injectable } from '@angular/core';
import { MOCK_FILE } from '../../models/common.model';
import { HttpClient } from '@angular/common/http';
import { Clinique } from '../../models/clinique.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CliniqueService {

  constructor(private http:HttpClient) { }

  getAll(param?:string, param_case?:any):Observable<Clinique[]>{
    return this.http.get<any>(MOCK_FILE)
    .pipe(
      map((e:any) => {
        const rep =  e.cliniques;
        console.log("API cliniques: " + JSON.stringify(rep))
        return rep;
      })
    );
  }
}
