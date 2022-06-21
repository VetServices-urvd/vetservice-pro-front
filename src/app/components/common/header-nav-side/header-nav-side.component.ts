import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-header-nav-side',
  templateUrl: './header-nav-side.component.html',
  styleUrls: ['./header-nav-side.component.scss']
})
export class HeaderNavSideComponent implements OnInit {

  titre = 'Vetservices';
  constructor(private navigationService: NavigationService){}

  ngOnInit(): void {
  }
  redirectTo(route: string) {
    this.navigationService.navigateTo(route);
  }
}
