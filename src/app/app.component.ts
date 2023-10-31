import { Component } from '@angular/core';
import { Cancion } from './canciones.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Play-List Spotify';

canciones: Cancion[]=[

];

nombreCancionInput: String ="";
nombreAutorInput: String = "";
fechaPublicacionInput:String = "";
generoInput:String="";
descripcionInput:String = "";

agregarCancion(){

  let cancionOnce= new Cancion(this.nombreCancionInput, this.nombreAutorInput, this.fechaPublicacionInput,this.generoInput,this.descripcionInput);
this.canciones.push(cancionOnce);
// Después de agregar la canción, restablece los valores de los inputs
this.nombreCancionInput = "";
this.nombreAutorInput = "";
this.fechaPublicacionInput = "";
this.generoInput = "";
this.descripcionInput = "";

}



}
