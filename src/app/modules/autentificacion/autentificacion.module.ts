import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    ServicesComponent
  ],

  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ]
})
export class AutentificacionModule { }
