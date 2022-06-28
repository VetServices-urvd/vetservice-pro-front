import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageViewRoutingModule } from './home-page-view-routing.module';
import { DefaultViewComponent } from '../../default-view/default-view.component';
import { HomePageViewComponent } from './home-page-view.component';
import { MaterialModule } from '../../../lib/material/material.module';
import { CollaborateurManagerViewComponent } from './home-views/collaborateur/collaborateur-manager-view/collaborateur-manager-view.component';
import { CliniqueManagerViewComponent } from './home-views/clinique/clinique-manager-view/clinique-manager-view.component';
import { CompteAbonnementViewComponent } from './home-views/compte/compte-abonnement-view/compte-abonnement-view.component';
import { CollaborateurConsultComponent } from '../../../components/collaborateur/collaborateur-consult/collaborateur-consult.component';
import { CollaborateurModifComponent } from '../../../components/collaborateur/collaborateur-modif/collaborateur-modif.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../../lib/primeng/primeng.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CliniqueModifComponent } from '../../../components/clinique/clinique-modif/clinique-modif.component';
import { CliniqueConsultComponent } from '../../../components/clinique/clinique-consult/clinique-consult.component';
import { CollaborateurSupprimeAlertComponent } from '../../../components/collaborateur/collaborateur-supprime-alert/collaborateur-supprime-alert.component';
import { DisponibliteFormComponent } from '../../../components/clinique/disponiblite-form/disponiblite-form.component';
import { AdresseFormComponent } from '../../../components/clinique/adresse-form/adresse-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CliniqueDeleteAlertComponent } from '../../../components/clinique/clinique-delete-alert/clinique-delete-alert.component';



@NgModule({
  declarations: [
    HomePageViewComponent,
    DefaultViewComponent,
    CollaborateurManagerViewComponent,
    CliniqueManagerViewComponent,
    CompteAbonnementViewComponent,
    CollaborateurConsultComponent,
    CollaborateurModifComponent,
    CollaborateurSupprimeAlertComponent,
    CliniqueConsultComponent,
    CliniqueModifComponent,
    DisponibliteFormComponent,
    AdresseFormComponent,
    CliniqueDeleteAlertComponent
  ],
  imports: [
    CommonModule,
    //BrowserModule,
    //BrowserAnimationsModule,
    HomePageViewRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [ConfirmationService, MessageService ],
  bootstrap: [HomePageViewComponent]
})
export class HomePageViewModule { }
