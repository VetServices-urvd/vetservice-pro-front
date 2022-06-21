import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SubcriptionVetViewComponent } from './views/subcription-vet-view/subcription-vet-view.component';
import { InscriptionCollabViewComponent } from './views/inscription-collab-view/inscription-collab-view.component';
import { AuthentificationViewComponent } from './views/authentification-view/authentification-view.component';

const routes: Routes = [
  {
    path: 'veterinaire', // ?vet=...&user=...?admin=true/false
    loadChildren: () => import('./views/home/home-page-view/home-page-view.module').then(m => m.HomePageViewModule)
  },
  {
    path: 'veterinaire/inscription',
    component: InscriptionCollabViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'veterinaire/authentification',
    component: AuthentificationViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'subscription',
    component: SubcriptionVetViewComponent,
    pathMatch: 'full'
  },
  {
    path:'',
    redirectTo:'subscription',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
