import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientesasociados',
  templateUrl: './clientesasociados.component.html',
  styleUrls: ['./clientesasociados.component.css']
})
export class ClientesasociadosComponent implements OnInit {
  titulo_modal:string = "Clientes asociados";
  argsClientes: any []  = [];
  clienteSeleccionado = null;
  noClientes = 0;
  constructor() {
    this.argsClientes = JSON.parse(localStorage.getItem("clientes_asociados")); 
    if(this.argsClientes.length > 0)
      this.noClientes = this.argsClientes.length;
   }

  ngOnInit() {
  }

  consultaCuenta(): string {
    return this.clienteSeleccionado != null ? `https://tciconsultoria.com/Inver/notificaciones/Mailin.php?record=${this.clienteSeleccionado}`: null;
  }

}
