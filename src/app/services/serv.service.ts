import { ArrayType } from '@angular/compiler';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

public listaensayos =[
  {
    "id": "1",
    "rs": "Marcos Albornoz",
    "variedades": "DM2772, DM2773, P2089, DK7210",
    "ds": "65.000 plantas/ha",
    "fertilizacion": "100 kg/ha MAP",
    "localidad": "Cerrito",
    "fs": "20/09/2020",
    "lat": -31.580529,
    "lng": -60.143387,
  },
  {
    "id": "2",
    "rs": "Indigo SA",
    "variedades": "DM2772, DM2773, KM4321, LT623",
    "ds": "70.000 plantas/ha",
    "fertilizacion": "90 kg/ha DAP",
    "localidad": "Viale",
    "fs": "17/09/2020",
    "lat": -31.869084, 
    "lng": -60.030488,
  },
  {
    "id": "3",
    "rs": "Valeria Quiroga",
    "variedades": "DM2772, DM2773, P1833, AX7761",
    "ds": "75.000 plantas/ha",
    "fertilizacion": "100 kg/ha MAP",
    "localidad": "La Paz",
    "fs": "15/09/2020",
    "lat": -30.761061, 
    "lng": -59.628622,
  }];

  constructor() { }

  public obtenerTodos() {
    return this.listaensayos;
  }

  public obtenerPorId(id: string) {
    for (let ens of this.listaensayos) {
      if (ens.id == id) {
        return ens;
      }
    }
  }

  public obtenerLat(id: string) {
    for (let ens of this.listaensayos) {
      if (ens.id == id) {
        return ens.lat;
      }
    }
  }

  public obtenerLng(id: string) {
    for (let ens of this.listaensayos) {
      if (ens.id == id) {
        return ens.lng;
      }
    }
  }

public agregarensayo(nuevo){
  this.listaensayos.push(nuevo);
  
  
}
}
