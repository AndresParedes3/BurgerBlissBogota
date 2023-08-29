import { Component } from '@angular/core';
import { Novedades } from '../novedades';
@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent {
  novedades: Novedades[] = [
    {
      hamburgueseria: "XL Gourmet",
      imagen: "https://acortar.link/PyVMTB", 
      descripcion: "Esta ubicado en el barrio Modelia, es reconocido por sus hamburguesas artesanales de muy buen sabor"
    },
    {
      hamburgueseria: "Home Burguers",
      imagen: "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/341167658_899893957778744_9012552348790514956_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DSxN2q6n8NUAX88dqzQ&_nc_ht=scontent-bog1-1.xx&oh=00_AfDXp4Yz5h7Ywm0mrZ5v_m9lqKka1zhMW_S2Nc6EY1StDA&oe=64F338F4", 
      descripcion: "Es un restaurante muy destacado por su excelente servicio y ubicacion, conoce mas..."
    },
    {
      hamburgueseria: "Agadon",
      imagen: "https://images-mini.cluvi.com/5Wkdkfwnm4/thumb_5Wkdkfwnm4_logo1.png", 
      descripcion: "Este restaurante fue muy aclamado durante el Burger Master, siendo uno de los mas concurridos por los asistentes."
    },
  ];
}