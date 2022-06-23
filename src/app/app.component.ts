import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig,
    private navigationService: NavigationService){}


  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
