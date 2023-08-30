const prompt = require("prompt-sync")({ sigint: true });
/*Valoración de películas
Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
inválido".
Cuando el usuario haya valorado la película, agradecerle su visita.*/
function pelicula (valorPelicula){
switch (valorPelicula) {
    case "Muy mala":
        console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
        break;
    case "Mala":
        console.log("Calificaste la película como  Mala. Lo lamentamos mucho.");
        break;
    case "Mediocre":
        console.log("Calificaste la película como Mediocre. tu comentario es valioso para nosotros.");
        break;
    case "Buena":
        console.log("Calificaste la película como Buena. esperamos la hayas disfrutado.");
        break;
    case "Muy buena":
        console.log("Calificaste la película como Muy Buena. Estamos felices por ti.");
        break;
    default:
        console.log("Ingresaste un valor inválido.");
        
}
}

let valorPelicula =  prompt("Califique la pelicula como: Muy mala, Mala, Mediocre, Buena, Muy buena. ");

let valoracion = pelicula (valorPelicula);

console.log(valoracion);
console.log("Gracias por su visita");

