import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor( private http : HttpClient ) { }

  getContratosDocsVencidos(clave){
    return this.http.get(`https://tciconsultoria.com.mx/Inver/asociados/doc-vencidos.php?clave_promotor=${clave}`);
  }

  getComisionesDocumentos(clave){
    return this.http.get(`https://tciconsultoria.com.mx/Inver/asociados/comisiones-doc.php?clave_promotor=${clave}`);
  }

  getContratosActivos(clave){
    return this.http.get(`https://tciconsultoria.com.mx/Inver/asociados/contratos-activos.php?clave_promotor=${clave}`);
  }
  getComisionesporCobrar(clave,fecha){
    return this.http.get(`https://tciconsultoria.com.mx/Inver/asociados/comisiones-cobrar.php?clave_promotor=${clave}&fecha=${fecha}`);
  }
}
