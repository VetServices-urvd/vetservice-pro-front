import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SubcriptionVetViewComponent } from './views/subcription-vet-view/subcription-vet-view.component';
import { InscriptionCollabViewComponent } from './views/inscription-collab-view/inscription-collab-view.component';
import { DefaultViewComponent } from './views/default-view/default-view.component';
import { AuthentificationViewComponent } from './views/authentification-view/authentification-view.component';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'authentification',
    component: AuthentificationViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'subscription',
    component: SubcriptionVetViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'inscription',
    component: InscriptionCollabViewComponent,
    pathMatch: 'full'
  },
  {
    path:'',
    redirectTo:'subscription',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
