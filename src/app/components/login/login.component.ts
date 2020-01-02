import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { GraphicsService } from 'src/app/services/graphics.service';
import { QueriesService } from 'src/app/services/queries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadingEnable = false;

  constructor( private loginService: LoginService, private graphicsService: GraphicsService, 
               private route       : Router      , private queriesService : QueriesService) { }

  ngOnInit() {
    
  }
  async onLogin(form: NgForm){
    if(form.valid){
        this.loadingEnable = true;
        this.loginService.login(form.value['clave']).subscribe(async (empleado: any) => {
          if(empleado.length > 0){
            localStorage.setItem('report-asociados',JSON.stringify(empleado));
            this.loadingEnable = false;
            await localStorage.setItem('clave',form.value['clave']);
            // this.graphicsService.alertTimer('success','!Bienvenido!',`${empleado[0].nombre}`,'top-end');
            this.graphicsService.alertLoading('Espere...','Obteniendo información de usuario');
            await this.queriesService.getContratosDocsVencidos(form.value['clave']).subscribe( async (response:any) =>{
              await localStorage.setItem('contratosDocsVencidos',JSON.stringify(response));
                await this.queriesService.getComisionesDocumentos(form.value['clave']).subscribe( async (response:any) =>{
                  await localStorage.setItem('comisiones_documentos',JSON.stringify(response));
                    await this.queriesService.getContratosActivos(form.value['clave']).subscribe( async (response:any) =>{
                      await localStorage.setItem('contratos_activos',JSON.stringify(response));
                      await this.route.navigate(['/inicio']);
                    });
                });
            });
            await this.graphicsService.alertTimer('success','!Bienvenido!',`${empleado[0].nombre}`,'top-end');
          }else{
            this.loadingEnable = false;
            this.graphicsService.alertConfirmButton('error','Error de autenticación','Revisa tu contraseña y vulve a intentarlo.','center');
            form.reset();
          }
      });
    }
  }
}
