import { CineService } from './../../servicios/cine.service';
import { Component } from '@angular/core';

import Swal from 'sweetalert2';//IMPORTAMOS
@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'

})
export class CineComponent {
  constructor(private CineService:CineService){} //CREAMOS UN CONSTUCTOR PARA HACER USO DE LAS FUNCIONES QUE ESTAN EN DICHO SERVICIO


  datosTipo:any

  registrar(lugar:any, nombre:any){
    this.CineService.guardarCine(lugar.value, nombre.value).subscribe({
      next:(datos)=>{
        Swal.fire({
          title: 'Correcto!',
          text: 'Dato registrado correctamente.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      },
      error: (error)=>{
        Swal.fire({
          title: 'Incorrecto!',
          text: 'No se ha registrar.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }
    })
  }


}
