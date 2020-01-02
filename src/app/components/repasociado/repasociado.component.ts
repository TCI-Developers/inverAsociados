import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repasociado',
  templateUrl: './repasociado.component.html',
  styleUrls: ['./repasociado.component.css']
})
export class RepasociadoComponent implements OnInit {
  titulo_modal:string = "Reporte de asociados";
  repAsociados           : any []  = [];
  constructor() { }

  async ngOnInit() {
    await this.acumulados();
  }

  acumulados(){
    this.repAsociados = JSON.parse(localStorage.getItem("report-asociados")); 
  }

  isObjectEmpty(object){
    return !!Object.keys(object).length;
  }

}
