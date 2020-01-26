import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutevenementPageRoutingModule } from './ajoutevenement-routing.module';

import { AjoutevenementPage } from './ajoutevenement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutevenementPageRoutingModule
  ],
  declarations: [AjoutevenementPage]
})
export class AjoutevenementPageModule {}
