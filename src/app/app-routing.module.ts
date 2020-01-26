import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'evenements',
    loadChildren: () => import('./evenements/evenements.module').then( m => m.EvenementsPageModule)
  },
  {
    path: 'ajoutevenement',
    loadChildren: () => import('./ajoutevenement/ajoutevenement.module').then( m => m.AjoutevenementPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
