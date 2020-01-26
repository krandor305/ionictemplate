import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { IonicModule } from '@ionic/angular';

import { EvenementsPageRoutingModule } from './evenements-routing.module';

import { EvenementsPage } from './evenements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvenementsPageRoutingModule
  ],
  providers:[
    SQLite,
  ],
  declarations: [EvenementsPage]
})
export class EvenementsPageModule {}
