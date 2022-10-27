import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl='https://porfoliowebexternobackend.herokuapp.com/api';
  constructor( private http: HttpClient  ) { }

getExperiencias() { return this.http.get(`${this.apiServerUrl}/experiencia/all`); }

getExperiencia(id:string | number| undefined):Observable<Experiencia>{return this.http.get<Experiencia>(`${this.apiServerUrl}/experiencia/${id}`); }

saveExperiencia( experiencia: Experiencia )  {return this.http.post(`${this.apiServerUrl}/experiencia/add`, experiencia);}

updateExperiencia( id:(string | number | undefined) , updateExperiencia: Experiencia ): Observable<Experiencia>  {
    return this.http.put(`${this.apiServerUrl}/experiencia/update/${id}`, updateExperiencia); }

deleteExperiencia(id: string|number|undefined )  {return this.http.delete(`${this.apiServerUrl}/experiencia/delete/${id}`); }


}
