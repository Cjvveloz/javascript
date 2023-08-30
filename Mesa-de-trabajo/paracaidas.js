const prompt = require ("prompt-sync")({sigint: true})

function abrirParacaidas(velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        return "¡Abre el paracaídas!";
    } else {
        return "No es necesario abrir el paracaídas en este momento.";
    }
}

// Ejemplo de uso
let velocidad = prompt("Ingrese la velocidad ");
let altura = prompt("Ingrese la altura ");
let decision = abrirParacaidas(velocidad, altura);
console.log(decision);

