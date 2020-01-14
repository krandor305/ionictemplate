import { Component } from '@angular/core';
import {Map,tileLayer,Marker,LayerGroup, Layer} from 'leaflet';
import {HomeService} from './../database/home.service'
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject,Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage  {

  map:Map;
  userMarker:any;
  layer:LayerGroup;
  places:any;
  address:any;
  
  constructor(private sqlite: SQLite,private db:HomeService) {
    
   }

   ngOnInit() {
    this.map = new Map("mapId").setView([33.58,-367.62], 13);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom: 18}).addTo(this.map);
    this.layer=new LayerGroup().addTo(this.map);

    this.db.getdbstate().subscribe(() =>{
        this.places = this.db.getplaces();
    })

    for(var ob of this.places)
    {
      this.userMarker=new Marker([ob.x,ob.y]).addTo(this.layer);
    }
   
  }

    //this.userMarker=new Marker([33.58,-367.62]).addTo(this.layer);

onclick()
{
/*let x,y;
this.map.on('click',(e)=>{
  x=e.latlng.lat
  y=e.latlng.lng
  //alert("Lat, Lon : " + x + ", " + y);
  this.userMarker=new Marker([x,y]).addTo(this.layer);

});*/

}

onsubmitaddress()
{
  alert("you search this"+this.address);

 
}

}


