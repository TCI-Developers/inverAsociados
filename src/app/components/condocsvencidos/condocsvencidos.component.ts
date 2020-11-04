import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condocsvencidos',
  templateUrl: './condocsvencidos.component.html',
  styleUrls: ['./condocsvencidos.component.css']
})
export class CondocsvencidosComponent implements OnInit {
  titulo_modal:string = "Contratos Doc Vencidos";
  argsContratos_docs_vencidos      : any []  = [];
  contratosVencidos            : number;
  importeTotalVencido          : number = 0;
  comisionTotalCobrar          : number = 0;
  importePagomensual          : number = 0;
  constructor() { }

 async ngOnInit() {
   await this.acumulados();
  }

  acumulados(){
    this.argsContratos_docs_vencidos = JSON.parse(localStorage.getItem("contratosDocsVencidos")); 
    this.contratosVencidos = this.argsContratos_docs_vencidos.length;
    this.argsContratos_docs_vencidos.forEach( documento =>{
      this.importeTotalVencido += Number(documento.importe_vencido);
      if(this.isObjectEmpty(documento.comision_por_cobrar))
        this.comisionTotalCobrar +=  Number(documento.comision_por_cobrar);
      this.importePagomensual += Number(documento.importe_pago_mensual);
    });
  }

  isObjectEmpty(object){
    return !!Object.keys(object).length;
  }

}
