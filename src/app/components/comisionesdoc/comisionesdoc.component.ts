import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comisionesdoc',
  templateUrl: './comisionesdoc.component.html',
  styleUrls: ['./comisionesdoc.component.css']
})
export class ComisionesdocComponent implements OnInit {
  titulo_modal: string = "Comisiones por Documento";
  argsComisionesDocs           : any []  = [];
  auxArgsComisionesDocs        : any []  = [];
  no_contratos_comisiones      : number;
  total_comisiones             : number = 0;
  constructor() { }

  async ngOnInit() {
    await this.acumulados();
  }

  acumulados(){
    let Contrato = "";
    let auxContrato = "";
    let totalDocumento = 0;
    this.argsComisionesDocs = JSON.parse(localStorage.getItem("comisiones_documentos")); 
    this.no_contratos_comisiones = this.argsComisionesDocs.length;
    this.argsComisionesDocs.forEach( documento =>{
      this.total_comisiones += Number(documento.saldo_comision);
    });

    for(let i = 0; i < this.argsComisionesDocs.length; i++){
      Contrato = this.argsComisionesDocs[i]['related_contrato2'];
      
      try {
        auxContrato = this.argsComisionesDocs[i+1]['related_contrato2'];
      } catch (error) {
        auxContrato = "";
      }
      
      if(Contrato == auxContrato){
        totalDocumento += Number(this.argsComisionesDocs[i].saldo_comision);
        this.auxArgsComisionesDocs.push(this.argsComisionesDocs[i]);
      }else{
        totalDocumento += Number(this.argsComisionesDocs[i].saldo_comision);
        this.auxArgsComisionesDocs.push(this.argsComisionesDocs[i]);
        this.auxArgsComisionesDocs.push({
          no_doc: "",
          related_contrato___asociado_1: "",
          fecha_vencimiento_text: "",
          saldo_comision: totalDocumento,
          related_contrato2: "",
          nombre_reembolso: "",
          update_id: ""
        });
        totalDocumento=0;
      }
    }
    //console.log("args",this.auxArgsComisionesDocs);  
  }
  

}
