import { Component } from '@angular/core';
import { Tienda } from '../tienda';
@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent {
  hamburgueserias: Tienda[] = [
    {
      nombre: 'La Hamburgeseria',
      direccion: 'Calle 70 # 4-69 - Bogotá',
      comentario: 'Con su ambiente animado y moderno, este restaurante se destaca por sus jugosas y sabrosas hamburguesas gourmet, elaboradas con ingredientes frescos y creativos. Desde clásicas opciones hasta combinaciones únicas, su menú ofrece algo para todos los gustos.',
      imagen: 'https://acortar.link/kphyxK',
      precio: 'Medio - Alto',
      carta: ' ',
      calificacion: '7/10'
    },
    {
      nombre: 'Burguer Town',
      direccion: 'Calle 99 #12 13',
      comentario: 'Sus suculentas creaciones a la parrilla son un deleite para los sentidos. Con una cuidadosa selección de ingredientes y una atención impecable al detalle, este restaurante se gana el corazón de los comensales.',
      imagen: 'https://www.burgertown.com.co/cdn/shop/files/A75B33F5-3E0E-4A0A-9B01-D3328ECFE882.png?v=1689192790&width=600',
      precio: ' Alto', 
      carta: ' ',
      calificacion: '6/10'
    },
    {
    nombre: 'Toro McCoy',
    direccion: 'Calle 38A Sur #34d-51',
    comentario: 'Es un restaurante muy conocido por su gran sabor, sin embargo, muchas personas alegan que es un poco caro',
    imagen: 'https://centrocomercialsantafe.com/wp-content/uploads/2022/05/toro-mccoy.jpg',
    precio: ' Bueno', 
    carta: ' ',
    calificacion: '7/10',
    }, 
  ];
}