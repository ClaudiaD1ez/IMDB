import { Movie } from "./Movie"
import { Imdb } from "./Imdb"
const fs = require ("fs");

let pelicula1 = new Movie("Harry Potter2",2001 ,"English","Fantasy")
let pelicula2 = new Movie("Espartaco2",1960,"American","belico")
let pelicula3 = new Movie("El diario de Noa2",2004,"American","Romance")

let arrayPelis:Movie[] = [pelicula1,pelicula2,pelicula3]

let listaPeliculas = new Imdb(arrayPelis)

listaPeliculas.escribirEnFicheroJSON("prueba.json")

console.log( listaPeliculas.obtenerInstanciaIMDB("prueba.json"));
