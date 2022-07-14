import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultViewComponent } from '../../default-view/default-view.component';
import { HomePageViewModule } from './home-page-view.module';
import { HomePageViewComponent } from './home-page-view.component';
import { CollaborateurManagerViewComponent } from './home-views/collaborateur/collaborateur-manager-view/collaborateur-manager-view.component';
import { CliniqueManagerViewComponent } from './home-views/clinique/clinique-manager-view/clinique-manager-view.component';
import { CompteAbonnementViewComponent } from './home-views/compte/compte-abonnement-view/compte-abonnement-view.component';
import { VosPrestationServicesComponent } from './home-views/vos-prestation-services/vos-prestation-services.component';
import { RendezVousManagerViewComponent } from './home-views/rendez-vous/rendez-vous-manager-view/rendez-vous-manager-view.component';
import { ProduitManagerViewComponent } from './home-views/produits/produit-manager-view/produit-manager-view.component';

const routesChilds: Routes = [
    {
      path:'home',
      component: HomePageViewComponent,
      children: [
        {
          path:'collaborateur',
          component: CollaborateurManagerViewComponent,
          pathMatch:'full'
        },
        {
          path:'clinique',
          component: CliniqueManagerViewComponent,
          pathMatch:'full'
        },
        {
          path:'compte&abonnement',
          component: CompteAbonnementViewComponent,
          pathMatch:'full'
        },
        {
          path:'rendez-vous',
          component: RendezVousManagerViewComponent,
          pathMatch:'full'
        },
        {
          path:'prestation',
          component: VosPrestationServicesComponent,
          pathMatch:'full'
        },
        {
          path:'produit',
          component: ProduitManagerViewComponent,
          pathMatch:'full'
        },
        {
          path:'**',
          redirectTo:'collaborateur',
          pathMatch:'full'
        }
    ]}
  ];

@NgModule({
  imports: [
    //HomePageViewModule,
    RouterModule.forChild(routesChilds)
  ],
  exports: [RouterModule]
})
export class HomePageViewRoutingModule { }
