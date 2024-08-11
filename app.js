// Luego,
// utilizando lo que sabemos sobre ciclos o bucles, muestra al usuario un listado
// con el detalle de cada una de nuestras películas favoritas.

// modulo nativo
const process = require("process");
//console.log(process.argv);

// modulo creado
const peliculas = require('./proyectos/peliculas.js')

function mostrarPelis() {
    console.log(`Mis películas favoritas y su información:`);
for (let i = 0; i < peliculas.length; i++) {
    console.log(`ID: ${peliculas[i].id}`);
    console.log(`Título: ${peliculas[i].title}`);
    console.log(`Director: ${peliculas[i].director}`);
    console.log(`Año: ${peliculas[i].year}`);
    console.log(`Rating: ${peliculas[i].rating}`);
    console.log(`Premios: ${peliculas[i].awards.join(" y ")}`); // habría que modificarlo si son más de dos premios, pero como no lo son, lo dejo así.
    console.log(`Duración: ${peliculas[i].length}`);
    console.log(`Precio: $${peliculas[i].price}`);
    console.log(`Género: ${peliculas[i].genre}`);   
};
};

mostrarPelis();