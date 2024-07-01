import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public info: Usuario[];

  constructor() {
    this.info = [
      {
        id: "",
        titulo: "Facturita :P",
        imagen: "",
        descripccion: "facturita bien rika"

      },
      {
        id: "",
        titulo: "Churros :p",
        imagen: "",
        descripccion: "churros bine rikos"

      },
      {
        id: "",
        titulo: "selva negra :P",
        imagen: "",
        descripccion: "tortw bien rika"

      }
    ]
  }

}
