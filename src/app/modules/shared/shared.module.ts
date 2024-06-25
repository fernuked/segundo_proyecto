import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones: navbar - footer
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Importaciones de componentes de inicio (cards)
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    ComponentsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ]
})

export class SharedModule { }
