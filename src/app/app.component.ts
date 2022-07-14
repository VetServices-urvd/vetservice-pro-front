import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { NavigationService } from './services/navigation.service';
import { ResponsiveService } from './services/state/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig,
    private navigationService: NavigationService,
    private responsiveService: ResponsiveService){}


  ngOnInit() {
    this.primengConfig.ripple = true;
    console.log("responsive screen "+ this.responsiveService.currentScreenSize);
    const day = new Date();
    day.setTime(Number('8:00'));
    console.log('')
  }
  ngOnDestroy() {
    this.responsiveService.destroyed.next();
    this.responsiveService.destroyed.complete();
  }
}
