import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material.module';
import {MatNativeDateModule} from '@angular/material/core';
import {AdecptopersonaprofileComponent} from './adecptopersonaprofile/adecptopersonaprofile.component';
import {AdecptopersonaComponent} from './adecptopersona/adecptopersona.component';
import {ProfilesearchComponent} from './profilesearch/profilesearch.component';
import {PresentationCardComponent} from './presentation-card/presentation-card.component';
import {EscolaridadComponent} from './escolaridad/escolaridad.component';
import {ExperienciaComponent} from './experiencia/experiencia.component';
import {ConocriticosComponent} from './conocriticos/conocriticos.component'
import {ControlversionapppComponent} from './controlversionappp/controlversionappp.component';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,AdecptopersonaprofileComponent,AdecptopersonaComponent,PresentationCardComponent,ProfilesearchComponent,EscolaridadComponent,ExperienciaComponent,ConocriticosComponent,ControlversionapppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,MaterialModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
