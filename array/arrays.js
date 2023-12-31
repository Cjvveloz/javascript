/*
Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente*/

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

console.log(peliculas[3]);

/*Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().*/

function mayusculas(peliculas){
    for (let i = 0; i < peliculas.length; i++) {
        console.log(peliculas[i].toUpperCase());
    }
}
mayusculas(peliculas);

/*Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas.*/

let peliculas2 = [ "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function unir(peliculas, peliculas2){
    let union = peliculas.concat(peliculas2);
    
    console.log(union);
}

unir(peliculas, peliculas2);

/*4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/

let juego = peliculas2.pop();

console.log(peliculas2);
console.log(juego);


/*5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
2
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las
funciones y testear su correcto funcionamiento.
Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar (asiaScores, euroScores){
   for (let i = 0; i < asiaScores.length; i++) {
           
    if (asiaScores[i] === euroScores[i]) {
        console.log("Son iguales. ")
    } else{
        console.log("No son iguales.")
    }
}
}

comparar (asiaScores, euroScores);

/*Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array).*/

const  persona = ["Gabriela", "leo", "christian"];
  
function imprimirInverso(persona){

for (let i = 0; i < persona.length; i++) {
    let personaInvertida = persona[i].split('').reverse().join('');
    console.log(personaInvertida);
    
}
}

imprimirInverso(persona);

/*En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:*/

function sumaArray(suma){
    let total =0;
    for (let i = 0; i < suma.length; i++) {
        total +=suma[i];      
        
    }
    console.log("el total es: "+ total)
}
const suma = [-5, 100, 19];
sumaArray(suma);

/*En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.
Ejemplo:
● join(["h","o","l","a"]) debe retornar el string "hola".
● join(["c","h","a,"u"]) debe retornar el string "chau".*/

const arr=['h','o','l','a'];
function join(arr){
   console.log(arr[0]+arr[1]+arr[2]+arr[3]);
}

join(arr);
