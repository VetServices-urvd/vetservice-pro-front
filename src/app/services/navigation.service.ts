import { Injectable } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import type { NavigationVal } from './../models/common.model'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute) { }

  navigateTo(route: NavigationVal | string) {
    switch(route) {
      case 'INSCRIPTION':
        this.router.navigate(['veterinaire/inscription']);
        break;
      case 'CONNETION':
        this.router.navigate(['veterinaire/authentification']);
        break;
      case 'HOME':
        this.router.navigate(['veterinaire/home']);
        break;
      default:
        this.router.navigate([route], {relativeTo: this.activatedRoute});
        break;
    }
  }

  logout(){
    sessionStorage.removeItem('USER_SESSION');
    this.navigateTo('CONNETION');
  }

}
