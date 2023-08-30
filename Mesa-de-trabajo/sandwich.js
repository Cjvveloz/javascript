function calcularTotal(sandwichBase, tipoPan, tieneQueso, tieneTomate, tieneLechuga, tieneCebolla, tieneMayonesa, tieneMostaza) {
    let precioBase = 0;

    switch (sandwichBase) {
        case "pollo":
            precioBase = 150;
            break;
        case "carne":
            precioBase = 200;
            break;
        case "veggie":
            precioBase = 100;
            break;
        default:
            console.log("Sándwich base no válido.");
            return 0;
    }

    let precioPan = 0;

    switch (tipoPan) {
        case "blanco":
            precioPan = 50;
            break;
        case "negro":
            precioPan = 60;
            break;
        case "s/gluten":
            precioPan = 75;
            break;
        default:
            console.log("Tipo de pan no válido.");
            return 0;
    }

    let precioAdicionales = 0;
    let preciosAdicionales = {
        queso: 20,
        tomate: 15,
        lechuga: 10,
        cebolla: 15,
        mayonesa: 5,
        mostaza: 5
    };

    if (tieneQueso) precioAdicionales += preciosAdicionales.queso;
    if (tieneTomate) precioAdicionales += preciosAdicionales.tomate;
    if (tieneLechuga) precioAdicionales += preciosAdicionales.lechuga;
    if (tieneCebolla) precioAdicionales += preciosAdicionales.cebolla;
    if (tieneMayonesa) precioAdicionales += preciosAdicionales.mayonesa;
    if (tieneMostaza) precioAdicionales += preciosAdicionales.mostaza;

    return precioBase + precioPan + precioAdicionales;
}


let totalAPagar = calcularTotal("carne", "negro", true, true, false, true, false, false);
console.log(`El total a pagar es: $${totalAPagar}`);
