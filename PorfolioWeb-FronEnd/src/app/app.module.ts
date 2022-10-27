import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { HabilidadesDurasBlandasComponent } from './components/habilidades-duras-blandas/habilidades-duras-blandas.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormAcercaDeComponent } from './components/acerca-de/form-acerca-de.component';
import { FormBannerComponent } from './components/banner/form-banner.component';
import { FormEducacionComponent } from './components/educacion/form-educacion.component';
import { FormExperienciaComponent } from './components/experiencia/form-experiencia.component';
import { FormHabilidadesDurasBlandasComponent } from './components/habilidades-duras-blandas/form-habilidades-duras-blandas.component';
import { FormProyectoComponent } from './components/proyecto/form-proyecto.component';
import { LoginComponent } from './components/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress'

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectoComponent,
    HabilidadesDurasBlandasComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormAcercaDeComponent,
    FormBannerComponent,
    FormEducacionComponent,
    FormExperienciaComponent,
    FormHabilidadesDurasBlandasComponent,
    FormProyectoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
