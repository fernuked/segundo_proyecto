import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './modules/pages/inicio/inicio.component';
import { InicioSesionComponent } from './modules/pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './modules/pages/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
