import { Component, OnInit } from '@angular/core';
import { ServService } from '../services/serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevoensayo',
  templateUrl: './nuevoensayo.page.html',
  styleUrls: ['./nuevoensayo.page.scss'],
})
export class NuevoensayoPage {

  private id: string;
  private rs: string;
  private variedades: string;
  private ds: string;
  private fertilizacion: string;
  private localidad: string;
  private fs: string;
  private lat: number;
  private lng: number;
  private nuevo = {};
  private todos;
  private index;

  constructor(private ensSrv: ServService, private router: Router) { 
    

  }

  public agregar() {
    this.todos = this.ensSrv.obtenerTodos();
    this.index = this.todos.length+1;
    this.nuevo = {
      "id": this.index,
      "rs": this.rs,
      "variedades": this.variedades,
      "ds": this.ds,
      "fertilizacion": this.fertilizacion,
      "localidad": this.localidad,
      "fs": this.fs,
      "lat": this.lat,
      "lng": this.lng,
    };
    this.ensSrv.agregarensayo(this.nuevo);
    /* console.log(this.nuevo); */
    this.router.navigate(['/listacampos']);
 }
}
