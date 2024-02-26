import { HabitacionesService } from './../../servicios/habitaciones.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';//IMPORTAMOS


@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  constructor(private HabitacionesService:HabitacionesService){} //CREAMOS UN CONSTUCTOR PARA HACER USO DE LAS FUNCIONES QUE ESTAN EN DICHO SERVICIO

  ngOnInit(): void {
    this.getPersona()
  }
  datosTipo:any

  registrar(numeroHabitacion:any, numeroAsientos:any, pelicula:any, cine_id:any){
    this.HabitacionesService.guardarHabitaciones(numeroHabitacion.value, numeroAsientos.value,pelicula.value, cine_id.value ).subscribe({
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

  datocine:any

  getPersona(){ //Mostrar
    this.HabitacionesService.getcine().subscribe({
      next:(datos:any)=>{
        this.datocine = datos.cine
      },error:(err)=>{
        console.log('err:'+err)
      }
    })}

}
