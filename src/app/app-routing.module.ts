import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdecptopersonaComponent } from './adecptopersona/adecptopersona.component'; 
import {AdecptopersonaprofileComponent} from './adecptopersonaprofile/adecptopersonaprofile.component';
// import { PresentationCardComponent } from './presentation-card//presentation-card.component';
const routes: Routes = [
  { path:'app',component:AdecptopersonaComponent},
  { path:'appp',component:AdecptopersonaprofileComponent},
 //{ path:'',component:PresentationCardComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
