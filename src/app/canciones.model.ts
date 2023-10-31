export class Cancion {
nombreCancion: String = '';
nombreAutor:String = '';
fecha:String='';
genero:String= '';
descripcion:String ='';
    constructor (nombreCancion: String, nombreAutor:String, fecha:String,genero:String,descripcion:String){
        this.nombreCancion = nombreCancion;
        this.nombreAutor = nombreAutor;
        this.fecha = fecha;
        this.genero = genero;
        this.descripcion = descripcion;
    }

}