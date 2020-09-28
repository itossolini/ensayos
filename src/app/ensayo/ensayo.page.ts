import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServService } from '../services/serv.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-ensayo',
  templateUrl: './ensayo.page.html',
  styleUrls: ['./ensayo.page.scss'],
})
  
export class EnsayoPage implements OnInit {
 
  private ensayo;

  public point = { lat: 0, long: 0 };
  
  constructor(private activateRoute: ActivatedRoute, private ensSrv: ServService, private geolocation: Geolocation) { 
    
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.ensayo = this.ensSrv.obtenerPorId(paramMap.get("id"));
    });
    this.generarMapa();
     }
  
    public generarMapa() {

    const divMapa = document.getElementById("container");
    const map = new google.maps.Map(divMapa,
      {
        center: { lat: this.ensSrv.obtenerLat(this.ensayo.id), lng: this.ensSrv.obtenerLng(this.ensayo.id) },
        zoom:11
      }
    )

  const punto = new google.maps.Marker({
    position: {
      lat: this.ensSrv.obtenerLat(this.ensayo.id), 
      lng: this.ensSrv.obtenerLng(this.ensayo.id) 
    },
    title: "Ensayo",
    map: map
  });
} 
}
