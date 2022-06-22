import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultViewComponent } from '../../default-view/default-view.component';
import { HomePageViewModule } from './home-page-view.module';
import { HomePageViewComponent } from './home-page-view.component';
import { CollaborateurManagerViewComponent } from './home-views/collaborateur/collaborateur-manager-view/collaborateur-manager-view.component';
import { CliniqueManagerViewComponent } from './home-views/clinique/clinique-manager-view/clinique-manager-view.component';

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
          component: CliniqueManagerViewComponent,
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
