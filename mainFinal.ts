import { Movie } from "./Movie"
import { Imdb } from "./Imdb"
const fs = require ("fs");
const tsp = require("prompt-sync");
const prompt = tsp();

//ncada uno de las propiedades de
//la clase Pelicula e inserte una nueva película en el fichero “imdbBBDD.json”

// let pelicula1 = new Movie("La historia interminable",1984,"English","Fantasy")
// let pelicula2 = new Movie("V de Vendetta",2005,"American","action")
// let pelicula3 = new Movie("los Goonies",1985,"American","Adventure")

let title = prompt("Title: ")
let releaseYear = Number(prompt("Release Year: "))
let nacionality = prompt("nacionality: ")
let genre = prompt("Genre: ")

let pelis = new Movie(title,releaseYear,nacionality,genre)

pelis.actors = prompt("Actors: ")
pelis.director = prompt("Director: ")
pelis.writer = prompt("Writer: ")
pelis.language = prompt("Language: ")
pelis.plataform = prompt("Plataform: ")
pelis.isMCU = Boolean(prompt("MCU: "))
pelis.mainCharacterName = prompt ("Main character name: ")
pelis.producer = prompt("Producer: ")
pelis.distributor = prompt("Distributor: ")


let nuevoIMDB = new Imdb([])

nuevoIMDB.obtenerInstanciaIMDB("imdbBBDD.json");

nuevoIMDB.peliculas.push(pelis)

nuevoIMDB.escribirEnFicheroJSON("imdbBBDD.json");


