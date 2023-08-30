const prompt = require ("prompt-sync")({sigint: true})

function traducir(traductor){
switch (traductor) {
    case "casa":
        traducido = "house";
        break;
    case "perro":
        traducido = "dog";
        break;
    case "pelota":
        traducido = "ball";
        break;
    case "arbol":
        traducido = "tree";
        break;
    case "genio":
        traducido = "genius";
        break;
    default:
        console.log("palabra ingresada es incorrecta.");
        
}
return traducido;
}
let traductor = prompt("Ingrese una palabra :");

console.log(traducir(traductor));

