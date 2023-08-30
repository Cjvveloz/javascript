
const prompt = require("prompt-sync")({ sigint: true });
/*function dominio(dominioSinPrefijo) {
    return "http://www." + dominioSinPrefijo;
}

// Llamamos a la función con un dominio específico
const dominioCompleto = dominio("digitalhouse.com.ar");
console.log(dominioCompleto); */

/*function reemplazoFastFast(texto, buscar, reemplazar)
{
    textoMod = texto.replace(buscar,reemplazar);
    return textoMod;

}
 textoMod = reemplazoFastFast('este texto es mala onda', 'mala', 'buena')

console.log(textoMod);*/

/*function menciona(texto, palabra) {
    return texto.includes(palabra);
}
console.log('la vida es bella', 'bella');*/

/*let saludar = nombre => console.log ('¡Hola, ' + nombre + '!');

let nombre1 ='ezequiel';
saludar(nombre1);*/


let nombre = prompt("Ingrese su nombre: ");
console.log( "hola " + nombre);

