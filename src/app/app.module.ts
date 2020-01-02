import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CondocsvencidosComponent } from './components/condocsvencidos/condocsvencidos.component';
import { ComisionesdocComponent } from './components/comisionesdoc/comisionesdoc.component';
import { RepasociadoComponent } from './components/repasociado/repasociado.component';
import { ContractivosComponent } from './components/contractivos/contractivos.component';
import { ComisionescobrarComponent } from './components/comisionescobrar/comisionescobrar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    CondocsvencidosComponent,
    ComisionesdocComponent,
    RepasociadoComponent,
    ContractivosComponent,
    ComisionescobrarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
