import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl= 'https://porfoliowebexternobackend.herokuapp.com/api';    /*environment.apiBaseUrl;*/

  constructor( private httpClient: HttpClient   ) { }

  public nuevo(nuevoUsuario: NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(`${this.apiServerUrl}/login/nuevo`,nuevoUsuario);
  }
  public login (loginUsuario: LoginUsuario):Observable<any>{
    return this.httpClient.post<any>(`${this.apiServerUrl}/login`,loginUsuario);
  }
}
