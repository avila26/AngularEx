import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importar httpClient


@Injectable({
  providedIn: 'root'
})
export class CineService {

  constructor(private http:HttpClient) { }

  guardarCine(lugar:any, nombre:any){
    return this.http.post('http://127.0.0.1:8000/api/cine',
    {
      lugar:lugar,
      nombre:nombre
    })
  }


}
