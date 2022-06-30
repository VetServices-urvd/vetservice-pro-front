import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentUser, AuthPayload } from '../../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MOCK_FILE } from '../../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get(payload?: AuthPayload):Promise<CurrentUser>{
    return this.http.get<any>(MOCK_FILE)
    .pipe(
      map((e:any) => {
        const rep =  e.auth;
        console.log("API current user: " + JSON.stringify(rep))
        return rep;
      })
    ).toPromise();
  }

}
