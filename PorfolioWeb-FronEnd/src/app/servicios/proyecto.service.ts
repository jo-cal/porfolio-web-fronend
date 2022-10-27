import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiServerUrl='https://porfoliowebexternobackend.herokuapp.com/api';
  constructor(  private http: HttpClient   ) { }


getProyectos() { return this.http.get(`${this.apiServerUrl}/proyecto/all`); }

getProyecto(id:string | number| undefined):Observable<Proyecto>{return this.http.get<Proyecto>(`${this.apiServerUrl}/proyecto/${id}`); }

saveProyecto(proyecto : Proyecto  ):Observable<any>{return this.http.post<any>(`${this.apiServerUrl}/proyecto/add`, proyecto );}

updateProyecto( id:(string |number|undefined) , updateProyecto : Proyecto  ): Observable<Proyecto>  {
    return this.http.put(`${this.apiServerUrl}/proyecto/update/${id}`, updateProyecto); }

deleteProyecto(id: string|number|undefined )  {return this.http.delete(`${this.apiServerUrl}/proyecto/delete/${id}`); }

}
