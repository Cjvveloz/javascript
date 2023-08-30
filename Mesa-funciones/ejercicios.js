const prompt = require("prompt-sync")({ sigint: true });

// ejercicio 1
//Crear una función que convierta pulgadas en centímetros.
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
function pulgadasACentimetros(pulgadas) {
    const centimetrosPorPulgada = 2.54;
    return pulgadas * centimetrosPorPulgada;
}

let pulgadas = 23;
let equivalenteCentimetros = pulgadasACentimetros(pulgadas);
console.log(`${pulgadas} pulgadas son ${equivalenteCentimetros} centímetros.`);

//ejercicio 2
//Crear una función que recibe un string y lo convierte en una URL.
//Ej: “pepito” es devuelto como “http://www.pepito.com”

function dominio(texto){
    return "http://www." + texto + ".com";
}
let texto = "paola";
let url = dominio(texto);
console.log(url);

//ejercicio 3
//Crear una función que recibe un string y devuelve la misma frase pero con admiración.

function admiracion(text){
    return text + "!";
}
let text = prompt("Ingrese una frase: ");
console.log(admiracion(text));

//ejercicio 4
//Crear una función que calcule la edad de los perros, considerando que 1 año
//para nosotros son 7 de ellos.

function edadDePerros(edad){
    return edad * 7;
}

let edad = prompt("Ingrese la edad del perro: ");
console.log(edadDePerros(edad));

//ejercio 5
//Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
//sueldo mensual como parámetro.
//PD: considerá que tu mes de trabajo tiene 40 horas.

function valorHoraTrabajo(sueldo){
        return sueldo / 40;
}
let sueldo = prompt("Ingrese su sueldo mensual: ");
console.log(valorHoraTrabajo(sueldo));

//ejercicio 6
//Crear la función calculadorIMC() que reciba la altura en metros y el peso en
//kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
//probando diferentes valores.

function calculadorIMC(altura, peso){
    return total = peso / (altura * altura);
    }
    let altura = prompt("Ingrese su altura en metros: ");
    let peso = prompt("Ingrese su peso en kilos: ");
console.log("Tu IMC es de :" + calculadorIMC(altura, peso));

// funciones flecha

/*let valorHoraTrabajo = sueldo => sueldo / 40;

const calculadorIMC = (altura, peso) => peso / (altura * altura);

const edadDePerros = edad => edad * 7;*/

// FUNCION toupperCase
function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}
let textoEnMinusculas = prompt("Ingrese texto a convertir: ");
console.log(convertirAMayusculas(textoEnMinusculas)); 

//FUNCION TYPEOF
function tipoDeDato(dato) {
    return typeof dato;
}

console.log(tipoDeDato(5)); 

// funcion MATH
function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

let radio = prompt("Ingrese radio: ");
let circunferencia = calcularCircunferencia(radio);
console.log(`La circunferencia con radio ${radio} es: ${circunferencia}`);


