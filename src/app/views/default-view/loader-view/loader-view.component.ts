import { Component, OnInit, OnDestroy,  Input } from '@angular/core';
import { ResponsiveService } from '../../../services/state/responsive.service';

export interface LoadingViewModel{
  data_load:boolean;
}
@Component({
  selector: 'app-loader-view',
  templateUrl: './loader-view.component.html',
  styleUrls: ['./loader-view.component.scss']
})
export class LoaderViewComponent implements OnInit, OnDestroy {
  @Input() title?:string = 'En cours de chargement ...'
  @Input() width?:number = 20;
  @Input() size?:number = 500;
  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.responsive();
  }
  ngDoCheck(): void {
    this.responsive();
  }
  responsive(){
    if(this.size && this.width ){
      if(this.responsiveService.currentScreenSize.toLowerCase() === 'XSmall'.toLowerCase()
      || this.responsiveService.currentScreenSize.toLowerCase() === 'Small'.toLowerCase()){
        this.size = this.size/2;
        this.width = this.width * 1/2;
      }
      if(this.responsiveService.currentScreenSize.toLowerCase() === 'Medium'.toLowerCase()){
        this.size = this.size * 3/4;
      }
    }
  }

  ngOnDestroy() {
    this.responsiveService.destroyed.next();
    this.responsiveService.destroyed.complete();
  }

}
