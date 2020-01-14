import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { BehaviorSubject,Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
private db:SQLiteObject;
private dbready:BehaviorSubject<Boolean> = new BehaviorSubject(true);

places=new BehaviorSubject([])
  constructor(private plat: Platform, private sqliteporter:SQLitePorter ,private sqlite:SQLite,private http:HttpClient)
   {

    this.plat.ready().then(() => {this.sqlite.create({
      name: 'moremap.db',
      location: 'default',
    }).then((db: SQLiteObject) => {this.db=db})
  });

   }

   loadplaces()
   {
     return this.db.executeSql('select * from places',[]).then(data=>{
       let places: any[] = [];
       if(data.rows.length>0)
       {
         for(var i=0;i<data.rows.length;i++)
         {
           places.push({
          id:data.rows.item(i).id,
          description:data.rows.item(i).description,
          title:data.rows.item(i).title,
          x:data.rows.item(i).x,
          y:data.rows.item(i).y,
          })
         }
       }
       this.places.next(places);
     })
   }

   getplaces():Observable<any[]>
   {
     return this.places.asObservable()
   }

   getdbstate()
   {
     return this.dbready.asObservable()
   }
}
