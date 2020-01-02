import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractivos',
  templateUrl: './contractivos.component.html',
  styleUrls: ['./contractivos.component.css']
})
export class ContractivosComponent implements OnInit {
  titulo_modal: string = "Contratos activos";
  argsContratosActivos           : any []  = [];
  importeTotalVencido            : number = 0;
  total_contratos_activos        : number;
  comisiontotal_cobrar           : number = 0;
  importe_pago_mensual           : number = 0;
  constructor() { }

async ngOnInit() {
   await this.acumulados();
}

  acumulados(){
    this.argsContratosActivos = JSON.parse(localStorage.getItem("contratos_activos")); 
    this.total_contratos_activos = this.argsContratosActivos.length;
    this.argsContratosActivos.forEach( documento =>{
      if(this.isObjectEmpty(documento.importe_vencido)){
        this.importeTotalVencido += Number(documento.importe_vencido);
      }
      if(this.isObjectEmpty(documento.comision_por_cobrar)){
        this.comisiontotal_cobrar += Number(documento.comision_por_cobrar);
      }
      this.importe_pago_mensual += Number(documento.importe_pago_mensual);
    });
  }

  isObjectEmpty(object){
    return !!Object.keys(object).length;
  }

}
