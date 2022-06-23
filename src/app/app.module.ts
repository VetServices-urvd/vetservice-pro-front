import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './lib/material/material.module';
import { SubcriptionVetViewComponent } from './views/subcription-vet-view/subcription-vet-view.component';
import { InscriptionCollabViewComponent } from './views/inscription-collab-view/inscription-collab-view.component';
import { AuthentificationViewComponent } from './views/authentification-view/authentification-view.component';
import { HeaderNavSideComponent } from './components/common/header-nav-side/header-nav-side.component';
import { PrimengModule } from './lib/primeng/primeng.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SubcriptionVetViewComponent,
    InscriptionCollabViewComponent,
    AuthentificationViewComponent,
    HeaderNavSideComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    PrimengModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
