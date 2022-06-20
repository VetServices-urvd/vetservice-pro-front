import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vetservice-pro-front';
  constructor(private navigationService: NavigationService){}
  redirectTo(route: string) {
    this.navigationService.navigateTo(route);
  }
}
