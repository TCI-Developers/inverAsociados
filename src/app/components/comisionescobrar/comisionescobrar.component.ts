import { Component, OnInit, ViewChild,ElementRef, Input } from '@angular/core';
import { GraphicsService } from 'src/app/services/graphics.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-comisionescobrar',
  templateUrl: './comisionescobrar.component.html',
  styleUrls: ['./comisionescobrar.component.css']
})
export class ComisionescobrarComponent implements OnInit {
  titulo_modal:string = "Comisiones por cobrar";
  modalVisible: boolean = false;
  repAsociados: any []  = [];
  comisiones:   any []  = [];
  contratos:    any []  = [];
  values:       any []  = [];
  totales:      number []  = [];
  total_comisiones_por_cobrar: number = 0;
  @ViewChild('fecha',{static:false}) fechaConsulta: ElementRef;
  constructor(private graphicsService: GraphicsService,private modalService: NgbModal,
              private Queries: QueriesService) { }

  ngOnInit() {
    this.repAsociados = JSON.parse(localStorage.getItem("report-asociados")); 
  }

  calcularComisiones(content){
    this.comisiones = [];
    this.contratos  = [];
    this.values     = [];
    this.totales    = [];
    this.total_comisiones_por_cobrar = 0;
    this.graphicsService.alertLoading('Espere...','Calculando comisiones!');
    if(this.fechaConsulta.nativeElement.value != ""){      
       this.Queries.getComisionesporCobrar(localStorage.getItem('clave'),this.fechaConsulta.nativeElement.value).subscribe( (Response: any[]) => {
         if(Response.length > 0){
            this.graphicsService.alertTimer('success','','!Calculo exitoso!','top-end');
          Response.forEach( (value:any []) => {
            this.contratos.push( Object.keys(value) );
            this.values.push(value[`${Object.keys(value)}`]);
          })
          for(let i = 0;i<this.values.length;i++){
            this.totales[i] = 0;
              for(let j=0;j<this.values[i].length;j++){
                this.totales[i] += Number(this.values[i][j].saldo_comision);
                this.total_comisiones_por_cobrar += Number(this.values[i][j].saldo_comision);
              }
          }      
           this.comisiones =Response;
           this.modalService.open(content,{ size: 'xl' });
         }else{
            this.graphicsService.alertConfirmButton('error','Error de calculo','Revisa tu conexión y vuelve a intentarlo.','center');
         }
      });
      
    }
    else  
      this.graphicsService.alertConfirmButton('info','!Sin fecha seleccionada!','Para realizar el calculo selecciona una fecha limite de consulta.','top-end');
  }  
}
