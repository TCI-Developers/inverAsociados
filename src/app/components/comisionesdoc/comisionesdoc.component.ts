import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comisionesdoc',
  templateUrl: './comisionesdoc.component.html',
  styleUrls: ['./comisionesdoc.component.css']
})
export class ComisionesdocComponent implements OnInit {
  titulo_modal: string = "Comisiones por Documento";
  argsComisionesDocs           : any []  = [];
  no_contratos_comisiones      : number;
  total_comisiones             : number = 0;
  constructor() { }

  async ngOnInit() {
    await this.acumulados();
  }

  acumulados(){
    this.argsComisionesDocs = JSON.parse(localStorage.getItem("comisiones_documentos")); 
    this.no_contratos_comisiones = this.argsComisionesDocs.length;
    this.argsComisionesDocs.forEach( documento =>{
      this.total_comisiones += Number(documento.saldo_comision);
    });
  }

}
