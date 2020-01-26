import { Component, OnInit } from '@angular/core';
import {HomeService} from './../database/home.service'
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.page.html',
  styleUrls: ['./evenements.page.scss'],
})
export class EvenementsPage implements OnInit {

  evenements:any;

  constructor(private db:HomeService) { }

  ngOnInit() {
    this.db.getdbstate().subscribe(() => {
      this.evenements=this.db.loadevenements()
    })
    
  }

}
