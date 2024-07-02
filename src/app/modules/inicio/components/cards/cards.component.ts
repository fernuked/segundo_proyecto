import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public info: Producto[];

  constructor() {
    this.info = [
      {
        id: "",
        titulo: "Facturita :P",
        precio: "6.000$",
        imagen: "https://www.cronica.com.ar/img/2022/04/06/recetas-de-factura-faci-casera-rapida_crop1649253823896.jpg",
        alt:"",
        descripccion: "facturita bien rika"

      },
      {
        id: "",
        titulo: "Churros :p",
        precio: "5000$",
        imagen: "https://media.ambito.com/p/58e4f0b3908595d5ef951723768004b3/adjuntos/239/imagenes/040/424/0040424677/churrosjpg.jpg",
        alt:"",
        descripccion: "churros bine rikos"

      },
      {
        id: "",
        titulo: "selva negra :P",
        precio: "9.000$",
        imagen: "https://content-cocina.lecturas.com/medio/2018/07/19/paso-a-paso-para-realizar-selva-negra-bizcocho-de-cacao-y-cerezas-resultado-final_d7f58c97_600x600.jpg",
        alt:"",
        descripccion: "tortw bien rika"

      }
    ]
  }

}
