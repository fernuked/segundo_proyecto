import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPrincipalComponent } from './pages/inicio-principal/inicio-principal.component';
import { CardsComponent } from './components/cards/cards.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';


@NgModule({
  declarations: [
    InicioPrincipalComponent,
    CardsComponent,
    NavbarComponent

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
    NavbarComponent
  ], 
  exports: [
    MatButtonModule,
    MatCardModule,
    NavbarComponent
  ]
})
export class InicioModule { }
