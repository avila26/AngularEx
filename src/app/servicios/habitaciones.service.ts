import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importar httpClient


@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {



  constructor(private http:HttpClient) { }

  guardarHabitaciones(numeroHabitacion:any, numeroAsientos:any,pelicula:any, cine_id:any){
    return this.http.post('http://127.0.0.1:8000/api/habitaciones',
    {
      numeroHabitacion:numeroHabitacion,
      numeroAsientos:numeroAsientos,
      pelicula:pelicula,
      cine_id:cine_id
    })
  }
  getcine(){
    return this.http.get('http://127.0.0.1:8000/api/cine')
  }
}
