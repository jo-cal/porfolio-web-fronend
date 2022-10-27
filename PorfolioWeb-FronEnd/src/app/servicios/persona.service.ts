import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiServerUrl='https://porfoliowebexternobackend.herokuapp.com/api';
  constructor(  private http: HttpClient) { }

getPersonas() { return this.http.get(`${this.apiServerUrl}/persona/all`); }

getPersona(id:string | number| undefined):Observable<Persona>{return this.http.get<Persona>(`${this.apiServerUrl}/persona/${id}`); }

savePersona(persona: Persona  )  {return this.http.post(`${this.apiServerUrl}/persona/add`, persona );}

updatePersona( id:(string | number | undefined) , updatePersona: Persona): Observable<Persona>  {
return this.http.put(`${this.apiServerUrl}/persona/update/${id}`, updatePersona); }

deletePersona(id: string|number|undefined )  {return this.http.delete(`${this.apiServerUrl}/persona/delete/${id}`); }  }



