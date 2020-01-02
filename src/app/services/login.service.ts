import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  response:any;
  constructor( private http : HttpClient ) { }

  login(clave){
    return this.response = this.http.get(`https://tciconsultoria.com.mx/Inver/asociados/report-asociados.php?clave_promotor=${clave}`);
  }

  estaAutenticado():boolean{
    return this.response != null;
  }
}
