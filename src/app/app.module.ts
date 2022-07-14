import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { MaterialModule } from './lib/material/material.module';
import { SubcriptionVetViewComponent } from './views/subcription-vet-view/subcription-vet-view.component';
import { InscriptionCollabViewComponent } from './views/inscription-collab-view/inscription-collab-view.component';
import { AuthentificationViewComponent } from './views/authentification-view/authentification-view.component';
import { HeaderNavSideComponent } from './components/common/header-nav-side/header-nav-side.component';
import { PrimengModule } from './lib/primeng/primeng.module';
import { CommonModule } from '@angular/common';
import { CompteSupprimeAlertComponent } from './components/compte/compte-supprime-alert/compte-supprime-alert.component';
import { CompteModifComponent } from './components/compte/compte-modif/compte-modif.component';
import { AbonnementReactivationAlertComponent } from './components/abonnement/abonnement-reactivation-alert/abonnement-reactivation-alert.component';
import { CliniqueDeleteAlertComponent } from './components/clinique/clinique-delete-alert/clinique-delete-alert.component';
import { AdresseFormComponent } from './components/clinique/adresse-form/adresse-form.component';
import { DisponibliteFormComponent } from './components/clinique/disponiblite-form/disponiblite-form.component';
import { CliniqueModifComponent } from './components/clinique/clinique-modif/clinique-modif.component';
import { CliniqueConsultComponent } from './components/clinique/clinique-consult/clinique-consult.component';
import { CollaborateurSupprimeAlertComponent } from './components/collaborateur/collaborateur-supprime-alert/collaborateur-supprime-alert.component';
import { CollaborateurModifComponent } from './components/collaborateur/collaborateur-modif/collaborateur-modif.component';
import { CollaborateurConsultComponent } from './components/collaborateur/collaborateur-consult/collaborateur-consult.component';
import { HomePageViewModule } from './views/home/home-page-view/home-page-view.module';
import { ResponsiveDirective } from './components/items/responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SubcriptionVetViewComponent,
    InscriptionCollabViewComponent,
    AuthentificationViewComponent,
    HeaderNavSideComponent,
    ResponsiveDirective,
   // LoaderViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    PrimengModule,
   // HomePageViewModule
  ],
  // exports:[

  // ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
