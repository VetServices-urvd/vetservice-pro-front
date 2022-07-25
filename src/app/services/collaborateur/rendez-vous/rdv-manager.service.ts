import { Injectable } from '@angular/core';
import { RdvItem } from '../../../models/rendez-vous.model';
import { Observable } from 'rxjs';
import { MOCK_FILE, QueryPayload, UpdatePayload, UpdateAnyPayload } from '../../../models/common.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IRequestGet, IRequestPush } from '../../state/services.state';

@Injectable({
  providedIn: 'root'
})
export class RdvManagerService implements IRequestGet<RdvItem[]>, IRequestPush {

  constructor(private http: HttpClient) { }

  getAll(payload?: QueryPayload):Observable<RdvItem[]>{
    return this.http.get<any>(MOCK_FILE)
    .pipe(
      map((e:any) => {
        const rep =  e.rendez_vous;
        console.log("API rendez_vous: " + JSON.stringify(rep))
        return rep.data;
      })
    );
  }

  update(payload: UpdateAnyPayload):Observable<any> {
    return this.http.post<any>(MOCK_FILE, null);
  }

  // put():Observable<any> {
  //   return this.http.put<any>(MOCK_FILE)
  //   .pipe(
  //     map((e:any) => {
  //       const rep =  e.rendez_vous;
  //       console.log("API rendez_vous: " + JSON.stringify(rep))
  //       return rep.status;
  //     })
  //   );
  // }

  // delete():Observable<any> {
  //   return this.http.delete<any>(MOCK_FILE)
  //   .pipe(
  //     map((e:any) => {
  //       const rep =  e.rendez_vous;
  //       console.log("API rendez_vous: " + JSON.stringify(rep))
  //       return rep.status;
  //     })
  //   );
  // }
}
