import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageViewRoutingModule } from './home-page-view-routing.module';
import { DefaultViewComponent } from '../../default-view/default-view.component';
import { HomePageViewComponent } from './home-page-view.component';
import { MaterialModule } from '../../../lib/material/material.module';
import { CollaborateurManagerViewComponent } from './home-views/collaborateur/collaborateur-manager-view/collaborateur-manager-view.component';
import { CliniqueManagerViewComponent } from './home-views/clinique/clinique-manager-view/clinique-manager-view.component';
import { CompteAbonnementViewComponent } from './home-views/compte/compte-abonnement-view/compte-abonnement-view.component';
import { CollaborateurConsultComponent } from '../../../components/collaborateur/collaborateur-consult/collaborateur-consult.component';



@NgModule({
  declarations: [
    HomePageViewComponent,
    DefaultViewComponent,
    CollaborateurManagerViewComponent,
    CliniqueManagerViewComponent,
    CompteAbonnementViewComponent,
    CollaborateurConsultComponent
  ],
  imports: [
    CommonModule,
    HomePageViewRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [HomePageViewComponent]
})
export class HomePageViewModule { }
