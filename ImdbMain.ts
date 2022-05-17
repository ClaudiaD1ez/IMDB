import { Professional } from "./professional"
import { Movie } from "./Movie"
import { Imdb } from "./Imdb"

let pelicula1 = new Movie("Harry Potter",2001 ,"English","Fantasy")
let pelicula2 = new Movie("Espartaco",1960,"American","belico")
let pelicula3 = new Movie("El diario de Noa",2004,"American","Romance")

let arrayPelis:Movie[] = [pelicula1,pelicula2,pelicula3]

let listaPeliculas = new Imdb(arrayPelis)


// Convertir a JSON el objeto Imdb
const fs = require ("fs-extra");

const myJson1 = JSON.stringify(listaPeliculas);

//Guardar dicho objeto en un fichero JSON con el nombre “imdbBBDD.json”.

fs.writeFileSync("./imdbBBDD.json",myJson1) //fs.outputFileSync("imdbBBDD.json",myJson1) ---> es lo mismo

//Actualizar el GIT con una nueva versión de la app

//Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb

const readpeliculas = fs.readFileSync ("./ImdbBBDD.json", "utf8")
const listaPeliculas2 = JSON.parse(readpeliculas);




