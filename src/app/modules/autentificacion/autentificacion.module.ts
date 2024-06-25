import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { PagesComponent } from './pages/pages.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    PagesComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ]
})
export class AutentificacionModule { }
