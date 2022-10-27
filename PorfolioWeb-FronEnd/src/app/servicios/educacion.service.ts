import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl='https://porfoliowebexternobackend.herokuapp.com/api';
  constructor( private http: HttpClient ) { }

getEducaciones() { return this.http.get(`${this.apiServerUrl}/educacion/all`); }

getEducacion(id:string | number| undefined):Observable<Educacion>{return this.http.get<Educacion>(`${this.apiServerUrl}/educacion/${id}`); }

saveEducacion( educacion: Educacion )  {return this.http.post(`${this.apiServerUrl}/educacion/add`, educacion);}

updateEducacion( id:(string | number | undefined) , updateEducacion: Educacion ): Observable<Educacion>  {
    return this.http.put(`${this.apiServerUrl}/educacion/update/${id}`, updateEducacion); }

deleteEducacion(id: string|number|undefined )  {return this.http.delete(`${this.apiServerUrl}/educacion/delete/${id}`); }
}
