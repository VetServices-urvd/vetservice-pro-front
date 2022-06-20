import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import type { NavigationVal } from './../models/common.model'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private readonly router: Router) { }

  navigateTo(route: NavigationVal | string) {
    switch(route) {
      case 'INSCRIPTION':
        this.router.navigate(['inscription']);
        break;
      case 'CONNEXION':
        this.router.navigate(['connexion']);
        break;
      default:
        this.router.navigate([route]);
        break;
    }
  }
}
