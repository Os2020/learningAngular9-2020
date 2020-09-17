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
import {EscolaridadComponent} from './escolaridad/escolaridad.component';
import {ExperienciaComponent} from './experiencia/experiencia.component';
import {ConocriticosComponent} from './conocriticos/conocriticos.component'
import {ControlversionapppComponent} from './controlversionappp/controlversionappp.component';
import {AppconocriticosComponent} from './appconocriticos/appconocriticos.component';
import {AppcversionComponent} from './appcversion/appcversion.component';
import {AppexperienciaComponent} from './appexperiencia/appexperiencia.component';
import {AppescolaridadComponent} from './appescolaridad/appescolaridad.component';
import {ApprecomendComponent} from './apprecomend/apprecomend.component';
import {ApppresentationcardComponent} from './apppresentationcard/apppresentationcard.component';
import {AppnotacomentarioComponent} from './appnotacomentario/appnotacomentario.component';
import {AppuploadimageComponent} from './appuploadimage/appuploadimage.component';
import {AppinstrumentosComponent} from './appinstrumentos/appinstrumentos.component';
import {AppcasonegocioComponent} from './appcasonegocio/appcasonegocio.component';
import {ApptabsComponent} from './apptabs/apptabs.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,AdecptopersonaprofileComponent,AdecptopersonaComponent,ProfilesearchComponent,EscolaridadComponent,ExperienciaComponent,ConocriticosComponent,ControlversionapppComponent
  ,AppconocriticosComponent,AppcversionComponent,AppexperienciaComponent,AppescolaridadComponent,ApprecomendComponent,
  ApppresentationcardComponent,AppnotacomentarioComponent,AppuploadimageComponent,AppinstrumentosComponent,AppcasonegocioComponent,ApptabsComponent
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
