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



@NgModule({
  declarations: [
    HomePageViewComponent,
    DefaultViewComponent,
    CollaborateurManagerViewComponent,
    CliniqueManagerViewComponent,
    CompteAbonnementViewComponent,
    CollaborateurConsultComponent,
    CollaborateurModifComponent
  ],
  imports: [
    CommonModule,
    //BrowserModule,
    //BrowserAnimationsModule,
    HomePageViewRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [HomePageViewComponent]
})
export class HomePageViewModule { }
