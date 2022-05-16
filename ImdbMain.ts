import { Professional } from "./professional"
import { Movie } from "./Movie"
import { Imdb } from "./Imdb"

let pelicula1 = new Movie("Harry Potter",2001 ,"English","Fantasy")
let pelicula2 = new Movie("Espartaco",1960,"American","belico")
let pelicula3 = new Movie("El diario de Noa",2004,"American","Romance")

let arrayPelis:Movie[] = [pelicula1,pelicula2,pelicula3]

let listaPeliculas = new Imdb(arrayPelis)




