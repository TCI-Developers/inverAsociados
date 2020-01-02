import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor() { }

  /*  
    positions sweetalert:
    'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
    icon:
    success,error,warning,info,question

  */

  alertConfirmButton(icon,title,text,position){
     Swal.fire({
      allowOutsideClick: false,
      position,
      icon,
      title,
      text
    });
  }

  alertTimer(icon,title,text,position){
    Swal.fire({
      allowOutsideClick: false,
      position,
      icon,
      title,
      text,
      showConfirmButton: false,
      timer: 1500
    });
  }

  alertLoading(title,text){
   Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      title,
      text
    });
    return Swal.showLoading();
  }
}
