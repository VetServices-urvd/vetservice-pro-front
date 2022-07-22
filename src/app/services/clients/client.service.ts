import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MOCK_FILE } from '../../models/common.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAll(val?:any, param?:string):Observable<Client[]>{
    return this.http.get<any>(MOCK_FILE)
    .pipe(
      map((e:any) => {
        const rep =  e.clients;
        console.log("API clients: " + JSON.stringify(rep))
        return rep.data;
      })
    );
  }
}
