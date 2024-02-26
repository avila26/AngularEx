import { Component } from '@angular/core';
import { HabitacionesService } from '../../servicios/habitaciones.service';

@Component({
  selector: 'app-reservar',
  standalone: true,
  imports: [],
  templateUrl: './reservar.component.html',
  styleUrl: './reservar.component.css'
})
export class ReservarComponent {

  constructor(private HabitacionesService:HabitacionesService){} //CREAMOS UN CONSTUCTOR PARA HACER USO DE LAS FUNCIONES QUE ESTAN EN DICHO SERVICIO

  ngOnInit(): void {
    this.getPersona()
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
