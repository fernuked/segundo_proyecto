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
import { MatMenuModule } from '@angular/material/menu'
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    ComponentsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ]
})

export class SharedModule { }
