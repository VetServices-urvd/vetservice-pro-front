import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
import { CollaborateurSupprimeAlertComponent } from '../../../components/collaborateur/collaborateur-supprime-alert/collaborateur-supprime-alert.component';
import { CliniqueConsultComponent } from '../../../components/clinique/clinique-consult/clinique-consult.component';
import { CliniqueModifComponent } from '../../../components/clinique/clinique-modif/clinique-modif.component';
import { DisponibliteFormComponent } from '../../../components/clinique/disponiblite-form/disponiblite-form.component';
import { CliniqueDeleteAlertComponent } from '../../../components/clinique/clinique-delete-alert/clinique-delete-alert.component';
import { AbonnementReactivationAlertComponent } from '../../../components/abonnement/abonnement-reactivation-alert/abonnement-reactivation-alert.component';
import { CompteModifComponent } from '../../../components/compte/compte-modif/compte-modif.component';
import { CompteSupprimeAlertComponent } from '../../../components/compte/compte-supprime-alert/compte-supprime-alert.component';
import { AdresseFormComponent } from '../../../components/clinique/adresse-form/adresse-form.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { VosPrestationServicesComponent } from './home-views/vos-prestation-services/vos-prestation-services.component';
import { ProduitManagerViewComponent } from './home-views/produits/produit-manager-view/produit-manager-view.component';
import { RendezVousManagerViewComponent } from './home-views/rendez-vous/rendez-vous-manager-view/rendez-vous-manager-view.component';
import { LoaderViewComponent } from '../../default-view/loader-view/loader-view.component';
import { AjoutClientAlertComponent } from '../../../components/client/ajout-client-alert/ajout-client-alert.component';



@NgModule({
  declarations: [
    HomePageViewComponent,
    DefaultViewComponent,
    LoaderViewComponent,
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
    CliniqueDeleteAlertComponent,
    AbonnementReactivationAlertComponent,
    CompteModifComponent,
    CompteSupprimeAlertComponent,
    VosPrestationServicesComponent,
    ProduitManagerViewComponent,
    RendezVousManagerViewComponent,
    AjoutClientAlertComponent,
  ],
  imports: [
    CommonModule,
    HomePageViewRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule
  ],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe, ConfirmationService, MessageService],
  bootstrap: [HomePageViewComponent]
})
export class HomePageViewModule { }
