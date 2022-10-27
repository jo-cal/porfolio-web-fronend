import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-form-acerca-de',
  templateUrl: './form-acerca-de.component.html',
  styleUrls: ['./form-acerca-de.component.css']
})
export class FormAcercaDeComponent implements OnInit {
  @HostBinding('class') classes = "row";

  persona: Persona  = {
    idPer: 0,
    datosPer:'',
    descripcionPer:'',
    imagenPer:''
  };
  edit: boolean = false;


  constructor( private personaService: PersonaService, private router: Router,
    private activatedRoute: ActivatedRoute  ) { }

    ngOnInit() {
      const params = this.activatedRoute.snapshot.params;
     if (params["id"]) {
      this.personaService.getPersona(params["id"]).subscribe({
        next: res => {
          console.log(res);
          this.persona  = res;
          this.edit=true;
        },
        error: err => {console.error(err)},
      });
     }
    }

    saveNewPersona() {
      delete this.persona.idPer;

      this.personaService.savePersona(this.persona).
      subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['']);
        },
         error: err => {console.log(err)},
    });
    }


    updatePersona() {
      this.personaService.updatePersona(this.persona.idPer, this.persona)
      .subscribe({
        next: res => {
           console.log(res);
           this.router.navigate(['']);
         },
         error: err => {console.log(err)},
   });
   }


}
