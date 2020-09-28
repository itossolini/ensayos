import { Component } from '@angular/core';
import { ServService } from '../services/serv.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listacampos',
  templateUrl: './listacampos.page.html',
  styleUrls: ['./listacampos.page.scss'],
})
export class ListacamposPage {

  private listaensayos; 


  constructor(private ensSrv: ServService, private router: Router) { 
    this.listaensayos = ensSrv.obtenerTodos();
  }

  public nuevo() {
    this.router.navigate(['/nuevoensayo']);
  }
}
