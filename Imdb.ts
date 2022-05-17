import { Professional } from "./professional"
import { Movie } from "./Movie"
const fs = require('fs')
export class Imdb{

    public peliculas:Movie[]

    constructor(peliculas:Movie[]){
        
        this.peliculas = peliculas

    } 
      
    // METODOS tome el nombre de un fichero como parámetro de entrada y genere un fichero 
    //json con toda la información de la base de datos.
    
    escribirEnFicheroJSON(nombreFichero: string){
        // const fs = require ("fs-extra");
        const myJson1 = JSON.stringify(this.peliculas);
        fs.writeFileSync(nombreFichero,myJson1)
    }
    
    //devuelva un objeto de la clase Imdb creado a partir del fichero.
    obtenerInstanciaIMDB(nombreFichero:string):Imdb{
    //    const fs = require ("fs-extra");
       const readpeliculas = fs.readFileSync (nombreFichero, "utf8")
       const peliculasFichero = JSON.parse(readpeliculas);

        return peliculasFichero
    }
}