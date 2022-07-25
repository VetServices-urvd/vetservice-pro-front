import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentUser, AuthPayload } from '../../models/user.model';
import { map } from 'rxjs/operators';
import { endpoints } from '../state/services.state';
import { NavigationService } from '../navigation.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private navigationService: NavigationService) { }

  url = endpoints.VETERINAIRE_AUNT;

  get(payload?: AuthPayload):Promise<CurrentUser>{
    return this.http.post(this.url, payload)
    .pipe(
      map((e:any) => {
        const rep =  e;
        console.log("API current user: " + JSON.stringify(rep))
        return rep;
      })
    ).toPromise();
  }
  current(): CurrentUser{
    const user_str:string | null = sessionStorage.getItem('USER_SESSION') || null;
    if(user_str){
      console.log("APP CURRENT USER get => "+ user_str);
      return JSON.parse(user_str);
    }else{
      this.navigationService.logout();
      return <CurrentUser>{};
    }


  }
}
