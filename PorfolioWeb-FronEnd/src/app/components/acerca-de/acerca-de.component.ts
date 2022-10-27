import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  isLogged = false;
  personas: any = [];

  constructor(  private personaService: PersonaService,   private router: Router,
    private activatedRoute: ActivatedRoute ,  private tokenService: TokenService  ) { }

    ngOnInit() {
      this.getPersonas();

      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }
    login() {
      this.router.navigate(['/login']);
    }
    onLogOut(): void {
      this.tokenService.logOut();
      window.location.reload();
    }




    getPersonas() {
      this.personaService.getPersonas().subscribe(
        {
        next: res => {
          this.personas=res;
        },
          error: err => {
            console.error(err);
          },
      });
    }



  deletePersona(idPer:string) {
    this.personaService.deletePersona( idPer).subscribe(
      {
        next: res => {
          console.log(res);
          this.getPersonas();
        },
          error: err => {
            console.log(err);
          },
      });
    }

    editPersona(idPer:string) {
      console.log(idPer);
      this.getPersonas();
    }



}


