const prompt = require("prompt-sync")({ sigint: true });

function totalAPagar(vehiculo, litrosConsumidos) {
    let total = 0;

    if (vehiculo === "coche") {
        if (litrosConsumidos <= 25) {
            total = litrosConsumidos * 86 + 50;
        } else {
            total = litrosConsumidos * 86 + 25;
        }
    } else if (vehiculo === "moto") {
        if (litrosConsumidos <= 25) {
            total = litrosConsumidos * 70 + 50;
        } else {
            total = litrosConsumidos * 70 + 25;
        }
    } else if (vehiculo === "autobus") {
        if (litrosConsumidos <= 25) {
            total = litrosConsumidos * 55 + 50;
        } else {
            total = litrosConsumidos * 70 + 25;
        }
    } else {
        console.log("Tipo de vehículo no válido");
        return; // Agregamos un return aquí para salir de la función en caso de vehículo no válido
    }

    console.log("El total a pagar es " + total);
}

let vehiculo = prompt("Ingrese tipo de vehiculo: ");
let litrosConsumidos = parseInt(prompt("Ingrese cantidad de litros consumidos: "));

totalAPagar(vehiculo, litrosConsumidos);
