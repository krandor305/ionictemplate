import { NgModule,ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SQLite } from '@ionic-native/sqlite/ngx';
//import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import {HomeService} from './../database/home.service'
import {HttpClientModule} from '@angular/common/http'


import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers:[
    SQLite,
  ],
  declarations: [HomePage],
 
})


export class HomePageModule {}
