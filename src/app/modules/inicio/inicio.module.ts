import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPrincipalComponent } from './pages/inicio-principal/inicio-principal.component';
import { CardsComponent } from './components/cards/cards.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InicioPrincipalComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ], 
  exports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
